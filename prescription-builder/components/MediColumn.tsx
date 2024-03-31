import React from 'react';

export interface MediColumnProps {
    label: string
    children: React.ReactNode
    columnFor: string
    span?: number
}

export const MediColumn: React.FC<MediColumnProps> = ({ label, children, columnFor, span=1 }) => (
    <div className={`grid grid-cols-1 col-span-${span}`}>
        <label htmlFor={columnFor} className="block text-sm font-medium leading-6 text-gray-900">{label}</label>
        <div className="relative mt-2 rounded-md shadow-sm">
            {children}
        </div>
    </div>);
