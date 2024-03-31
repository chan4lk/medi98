"use client"
import React, { useState } from 'react';
import { MediColumn } from './MediColumn';
import { AutoComplete } from './AutoComplete';
import drugNames from './drugNames';

export const MedicationSelection = () => {
    const [medication, setMedication] = useState(drugNames[0]);
    return <MediColumn label="Medication" columnFor="medication" span={2}>
        <AutoComplete list={drugNames} onChange={setMedication} value={medication} />
    </MediColumn>;
};
