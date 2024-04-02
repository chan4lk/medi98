// MedicationSelection.tsx
import React, { useState } from 'react';
import { MediColumn } from './MediColumn';
import { AutoComplete } from './AutoComplete';
import drugNames from './drugNames';

interface MedicationSelectionProps {
    onSelect: (selection: string) => void;
}

const MedicationSelection: React.FC<MedicationSelectionProps> = ({ onSelect }) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (value: string) => {
        onSelect(value);
        setInputValue(value);
    };


    const filteredDrugs = drugNames.filter(drug =>
        drug.toLowerCase().includes(inputValue.toLowerCase())
    );

    return (
        <MediColumn label="Medication" columnFor="medication" span={2}>
            <AutoComplete
                list={filteredDrugs}
                onChange={handleInputChange}
                value={inputValue}
                placeholder="Type to search..."
            />
        </MediColumn>
    );
};

export default MedicationSelection;
