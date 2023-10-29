import React, { useState } from 'react';
import logo1 from '../Screenshot_1.png';

function CompanyLogo() {
  const [position, setPosition] = useState('left'); // default position

  return (
    <div>
      <label className="text-2xl font-bold text-gray-800 mb-4">
        I want a Company Logo
      </label>
      <img
        src={logo1}
        alt="Company Logo"
        className={`w-24 mb-4 ${position === 'disable' && 'hidden'} 
                        ${position === 'left' && 'mr-auto ml-0'} 
                        ${position === 'right' && 'ml-auto mr-0'} 
                        ${position === 'center' && 'mx-auto'}`}
      />
      <div className="flex space-x-4">
        {/* Radio buttons for positioning */}
        {[
          { value: 'left', label: 'Left' },
          { value: 'right', label: 'Right' },
          { value: 'center', label: 'Center' },
          { value: 'disable', label: 'Disable' },
        ].map(({ value, label }) => (
          <label
            key={value}
            className="flex items-center space-x-2 text-gray-600"
          >
            <input
              type="radio"
              name="position"
              checked={position === value}
              onChange={() => setPosition(value)}
              className={`form-radio  h-5 w-5`}
            />
            <span>{label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default CompanyLogo;
