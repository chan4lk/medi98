import React from 'react';

export const MediColumn = ({ label, children, columnFor, span=1 }) => (
    <div className={`grid grid-cols-1 col-span-${span}`}>
        <label htmlFor={columnFor} className="block text-sm font-medium leading-6 text-gray-900">{label}</label>
        <div className="relative mt-2 rounded-md shadow-sm">
            {children}
        </div>
    </div>);
