import React from 'react';
import { HeaderItem } from './HeaderItem';

export const Header = () => (
  <div className='grid grid-cols-5 gap-2 text-gray-400 justify-items-center justify-content-center'>
    <HeaderItem label="Patient Name" value="Kanishka Karunarathna" span={2} />
    <HeaderItem label="Gender" value="Male" />
    <HeaderItem label="Age" value="32 Years" />
    <HeaderItem label="Weight" value="65 Kg" />
  </div>
);
