import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUIState } from '../redux/uiSlice';

function HeaderComponent() {
  const themeColor = useSelector(state => state.theme.color);
  const selections = useSelector(selectUIState);

  const [activeTab, setActiveTab] = useState('Tab1');
  const tabs = ['Tab1', 'Tab2'];

  return (
    <header
      className="text-white text-center py-4 flex justify-between items-center"
      style={{
        backgroundColor: themeColor,
        display: selections.header ? 'block' : 'none',
      }}
    >
      <div>App Features Selection</div>

      {selections.navigationTabs && (
        <nav className="pt-3">
          <ul className="flex justify-center space-x-4">
            {tabs.map((tab, index) => (
              <li
                key={index}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer px-4 py-2 ${
                  activeTab === tab ? 'border-b-2 border-white' : ''
                }`}
              >
                {tab}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default HeaderComponent;
