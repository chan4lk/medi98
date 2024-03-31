import React from 'react';

export interface HeaderItemProps {
    label: string
    value: string
    span?: number
}

export const HeaderItem: React.FC<HeaderItemProps> = ({ label, value, span = 1 }) => (
    <div className={`grid grid-cols-1 gap-1 col-span-${span}`}>
        <div>{label}</div>
        <div className='text-gray-500'>{value}</div>
    </div>);
