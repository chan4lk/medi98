import React, { useRef, useState } from 'react';

    export interface AutoCompleteProps {
        list: string[];
        value: string;
        onChange: (selected: string) => void;
        placeholder: string; // Add placeholder prop to the interface
}
    

export const AutoComplete: React.FC<AutoCompleteProps> = ({ list, onChange, value }) => {
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false); // State to control showing suggestions
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]); // State to hold filtered suggestions
    const inputFieldRef = useRef<HTMLInputElement>();
    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selection = e.target.value;
        onChange(selection);
        // Filter list of names based on input
        updateSuggestions(selection);
    };

    const handleFocus = () => {
        updateSuggestions(value);
        setShowSuggestions(true); // Show suggestions when input is focused
    };

    const handleNameSuggestionClick = (suggestion: string) => {
        onChange(suggestion);
        setShowSuggestions(false); // Hide suggestions when suggestion is clicked
        const inputField = inputFieldRef.current;
        if (inputField) {
            inputField.setSelectionRange(suggestion.length, suggestion.length); // Set cursor position to end of input
            inputField.focus();
            updateSuggestions(suggestion);
        }
    };

    const updateSuggestions = (suggestion: string) => {
        const filteredSuggestions = list.filter(name => name.toLowerCase().startsWith(suggestion.toLowerCase()) &&
            name.toLowerCase() !== suggestion.toLowerCase()
        );
        setFilteredSuggestions(filteredSuggestions);
        setShowSuggestions(suggestion.length > 0);
    }


    return (
        <React.Fragment>
            <input
                type="text"
                id="__autocomplete"
                value={value}
                onChange={handleValueChange}
                onFocus={handleFocus}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="aspirin"
            />
            {showSuggestions && (
                <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {filteredSuggestions.map((suggestion, index) => (
                       <span 
                       key={index} 
                       onClick={() => handleNameSuggestionClick(suggestion)}
                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" 
                       role="menuitem">{suggestion}</span>
                    ))}
                    </div>
                </div>
            )}
        
        </React.Fragment>
    )
};
