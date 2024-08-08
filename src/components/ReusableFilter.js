import React from "react";
import { ActionMenu, ActionList, Box, Text} from "@primer/react";
import '../App.css';

/**
 * ReusableFilter component
 * This component provides a filter functionality with animated selection and deselection of options.
 * @param {Array} providedOptions - The initial set of options to display.
 */
function ReusableFilter({providedOptions}) { 
      // State to manage the current set of options
      const [options, setOptions] = React.useState(providedOptions);

      // State to manage the previous set of options for animation purposes - fade out 
      const [prevOptions, setPrevOptions] = React.useState(providedOptions);
      // State to manage the fading animation
      const [isFading, setIsFading] = React.useState(false);

      // Effect hook to initialize prevOptions on component mount
      React.useEffect(() => {
        setPrevOptions(options.map(option => ({ ...option }))); // Initialize prevOptions on mount
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      // Toggles the selected options in the ActionMenu
      const toggle = (name) => {
        // Prevent toggling while an animation is in progress
        if (isFading) return; 
    
        setIsFading(true);
        setPrevOptions(options.map(option => ({ ...option })));
    
        //Update options after fade-out animation
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
      
      // Get the width for each box based on the number of selected options
      const getBoxWidth = () => {
        const selectedCount = getSelectedOptionsCount();
        if (selectedCount === 1) return '100%';
        if (selectedCount === 2) return '50%';
        if (selectedCount === 3) return '33.33%';
        return '25%';
      };

      // Get the view text based on the selected options
      const getViewText = () => {
        const selectedOptions = options.filter(option => option.selected);
        if (selectedOptions.length === 0) return "View: None";
        if (selectedOptions.length === options.length) return "View: All";
        return `View: ${selectedOptions.map(option => option.name).join(", ")}`;
      };

      /**
       * Render the boxes for both the fade out and fade in animations
       * @param {Array} optionsToRender - The options to render
       * @param {string} animationClass - The animation class to apply
       * @returns {Array} The list of rendered boxes
      */
      const renderBoxes = (optionsToRender, animationClass) => {
        return optionsToRender
          .filter(option => option.selected)
          .map(option => (
            <Box
              key={option.name}
              className={animationClass}
              sx={{
                flex: `0 1 ${getBoxWidth()}`,
              }}
            >
              <Text className="individual-card-title">{option.name}</Text>
              <Text className="individual-card-description">{option.description}</Text>
            </Box>
            
          ));
      };

      return(
        <Box className="reusable-card-section">
          <ActionMenu>

            <ActionMenu.Button className="action-button">{getViewText()}</ActionMenu.Button>

            <ActionMenu.Overlay width="auto">
              <ActionList selectionVariant="multiple">
                {options.map(options => <ActionList.Item key={options.name} selected={options.selected} onSelect={() => toggle(options.name)}>
                    {options.name}
                  </ActionList.Item>)}
              </ActionList>
            </ActionMenu.Overlay>

          </ActionMenu>
          <Box sx={{ 
            display: 'flex', 
            width: 'var(--breakpoint-medium)', 
            height: 'auto', 
            padding: 'var(--space-medium) 0', 
            gap: 'var(--stack-gap-spacious)' }}>

            {isFading
              ? renderBoxes(prevOptions, 'individual-card anim-fade-out custom-fade')
              : renderBoxes(options, 'individual-card anim-fade-in custom-fade')}

          </Box>
       </Box>);
        
}

export default ReusableFilter;