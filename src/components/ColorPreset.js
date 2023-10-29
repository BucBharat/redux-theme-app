import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setColor } from '../redux/themeSlice';
function ColorPreset() {
  const dispatch = useDispatch();
  const themeColor = useSelector(state => state.theme.color);
  const handleSetColor = color => {
    dispatch(setColor(color));
  };
  return (
    <div>
      <label className="text-2xl font-bold text-gray-800 mb-4">
        Preset Color
      </label>
      <div className="flex space-x-8">
        <label
          className={`flex items-center space-x-2 py-2 px-4 rounded ${
            themeColor === '#1976d2'
              ? 'bg-blue-100 border-blue-500 border-2'
              : 'hover:bg-gray-100'
          }`}
        >
          <input
            type="radio"
            name="presetColor"
            checked={themeColor === '#1976d2'}
            onChange={() => handleSetColor('#1976d2')}
            className="form-radio text-blue-500 h-5 w-5 mr-2"
          />
          <span
            className={`font-medium ${
              themeColor === '#1976d2' ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            Blue (#1976d2)
          </span>
        </label>
        <label
          className={`flex items-center space-x-2 py-2 px-4 rounded ${
            themeColor === '#ff0000'
              ? 'bg-red-100 border-red-500 border-2'
              : 'hover:bg-gray-100'
          }`}
        >
          <input
            type="radio"
            name="presetColor"
            checked={themeColor === '#ff0000'}
            onChange={() => handleSetColor('#ff0000')}
            className="form-radio text-red-500 h-5 w-5 mr-2"
          />
          <span
            className={`font-medium ${
              themeColor === '#ff0000' ? 'text-red-600' : 'text-gray-600'
            }`}
          >
            Red (#ff0000)
          </span>
        </label>
      </div>
      <div className="text-gray-600">
        Preset Apply only: Header Background, Button, Radio Button & Switch
      </div>
    </div>
  );
}

export default ColorPreset;
