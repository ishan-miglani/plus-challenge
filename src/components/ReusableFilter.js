import React from "react";
import { ActionMenu, ActionList, Box, Text } from "@primer/react";

function ReusableFilter({providedOptions}) { 
      const [options, setOptions] = React.useState(providedOptions);

      const [prevOptions, setPrevOptions] = React.useState(providedOptions);
      const [isFading, setIsFading] = React.useState(false);

      React.useEffect(() => {
        setPrevOptions(options.map(option => ({ ...option }))); // Initialize prevOptions on mount
      }, []);

      // const toggle = (name) => {
      //   setOptions(options.map(option => {
      //     if (option.name === name) option.selected = !option.selected;
      //     return option;
      //   }));
      // };

      const toggle = (name) => {
        if (isFading) return; // Prevent toggling while an animation is in progress
    
        setIsFading(true);
        setPrevOptions(options.map(option => ({ ...option }))); // Save current options state
    
        setTimeout(() => {
          setOptions(options.map(option => {
            if (option.name === name) option.selected = !option.selected;
            return option;
          }));
          setIsFading(false);
        }, 250); // Duration of fade-out animation
      };

      const getSelectedOptionsCount = () => {
        return options.filter(option => option.selected).length;
      };

      const getBoxWidth = () => {
        const selectedCount = getSelectedOptionsCount();
        if (selectedCount === 1) return '100%';
        if (selectedCount === 2) return '50%';
        if (selectedCount === 3) return '33.33%';
        return '25%'; // For 4 or more boxes
      };

      const getViewText = () => {
        const selectedOptions = options.filter(option => option.selected);
        if (selectedOptions.length === 0) return "View: None";
        if (selectedOptions.length === options.length) return "View: All";
        return `View: ${selectedOptions.map(option => option.name).join(", ")}`;
      };

      const renderBoxes = (optionsToRender, animationClass) => {
        return optionsToRender
          .filter(option => option.selected)
          .map(option => (
            // <Box
            //   key={option.name}
            //   className={animationClass}
            //   sx={{
            //     flex: '0 1 calc(25% - 16px)',
            //     padding: 3,
            //     margin: 2,
            //     borderRadius: 2,
            //   }}
            // >
            //   <Text as="p"><strong>{option.name}</strong></Text>
            //   <Text>{option.description}</Text>
            // </Box>
            <Box
              key={option.name}
              className={animationClass}
              sx={{
                flex: `0 1 ${getBoxWidth()}`,
                padding: 3,
                margin: 2,
                borderRadius: 2,
                backgroundColor: 'white',
              }}
            >
              <Text as="p"><strong>{option.name}</strong></Text>
              <Text>{option.description}</Text>
            </Box>
            
          ));
      };

      return(
        <div>
          <ActionMenu>
            <ActionMenu.Button>{getViewText()}</ActionMenu.Button>
            <ActionMenu.Overlay width="auto">
              <ActionList selectionVariant="multiple">
                {options.map(options => <ActionList.Item key={options.name} selected={options.selected} onSelect={() => toggle(options.name)}>
                    {options.name}
                  </ActionList.Item>)}
              </ActionList>
            </ActionMenu.Overlay>
          </ActionMenu>
          <Box className="boxes">
            {isFading
              ? renderBoxes(prevOptions, 'box color-shadow-medium anim-fade-out custom-fade')
              : renderBoxes(options, 'box color-shadow-medium anim-fade-in custom-fade')}
          </Box>
       </div>);
        
}

export default ReusableFilter;