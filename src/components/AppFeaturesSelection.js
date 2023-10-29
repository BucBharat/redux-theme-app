import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { setColor } from '../redux/themeSlice';
import CompanyLogo from './CompanyLogo';
import ColorPreset from './ColorPreset';
import HeaderComponent from './HeaderComponent';
import { setSelection } from '../redux/uiSlice';
import FooterComponent from './FooterComponent';

function AppFeaturesSelection() {
  const dispatch = useDispatch();
  const themeColor = useSelector(state => state.theme.color);

  const selections = useSelector(state => state.ui);
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);

  const buttonBaseClasses = 'text-white px-6 py-2 rounded focus:outline-none';
  const buttonColorClasses = {
    '#1976d2':
      'bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50',
    '#ff0000':
      'bg-red-500 hover:bg-red-600 active:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50',
  };
  const tabs = ['Tab1', 'Tab2'];
  const handleCheckboxChange = feature => {
    dispatch(
      setSelection({
        key: feature,
        value: !selections[feature],
      })
    );
  };
  return (
    <div>
      <HeaderComponent />

      <div
        className="fixed top-0 left-0 h-full w-64 bg-white shadow-xl transition-transform transform translate-x-0"
        style={{
          transform: isLeftDrawerOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s',
        }}
      >
        <button
          onClick={() => setIsLeftDrawerOpen(false)}
          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600"
        >
          &times;
        </button>
        <div className="p-4">Drawer Content</div>
      </div>

      {selections.rightDrawer && (
        <div
          className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl transition-transform transform translate-x-0"
          style={{
            transform: isRightDrawerOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.3s',
          }}
        >
          <button
            onClick={() => setIsRightDrawerOpen(false)}
            className="absolute top-2 left-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600"
          >
            &times;
          </button>
          <div className="p-4">Right Drawer Content</div>
        </div>
      )}

      <div className="flex justify-center">
        {selections.leftDrawer && !isLeftDrawerOpen && (
          <button
            onClick={() => setIsLeftDrawerOpen(true)}
            className="fixed top-4 left-4 flex flex-col items-center justify-center h-10 w-10 z-10 focus:outline-none"
          >
            <span className="block w-6 h-1 bg-yellow-500 mb-1"></span>
            <span className="block w-6 h-1 bg-yellow-500 mb-1"></span>
            <span className="block w-6 h-1 bg-yellow-500"></span>
          </button>
        )}
        {selections.rightDrawer && !isRightDrawerOpen && (
          <button
            onClick={() => setIsRightDrawerOpen(true)}
            className="fixed top-4 right-4 flex flex-col items-center justify-center h-10 w-10 z-10 focus:outline-none"
          >
            <span className="block w-6 h-1 bg-yellow-500 mb-1"></span>
            <span className="block w-6 h-1 bg-yellow-500 mb-1"></span>
            <span className="block w-6 h-1 bg-yellow-500"></span>
          </button>
        )}

        <div className="flex flex-col items-start space-y-4 p-6 bg-white rounded shadow-lg w-96 border border-gray-200">
          <CompanyLogo />
          <ColorPreset />
          <div className="space-y-2">
            {[
              { feature: 'header', label: 'I want a Header' },
              { feature: 'footer', label: 'I want a Footer' },
              {
                feature: 'drawerOverlay',
                label:
                  'I want a Drawer Overlay Mode (requires Header or Footer)',
                disabled: !selections.header && !selections.footer,
              },
              { feature: 'leftDrawer', label: 'I want a left-side Drawer' },
              { feature: 'rightDrawer', label: 'I want a right-side Drawer' },
              {
                feature: 'navigationTabs',
                label: 'I want navigation tabs (requires Header)',
                disabled: !selections.header,
              },
              {
                feature: 'bottomMenu',
                label: 'I want a Bottom Menu (requires Footer)',
                disabled: !selections.footer,
              },
            ].map(({ feature, label, disabled }) => (
              <label key={feature} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selections[feature]}
                  onChange={() => handleCheckboxChange(feature)}
                  disabled={disabled}
                  className="form-checkbox text-blue-500 h-5 w-5"
                />
                <span className={disabled ? 'text-gray-400' : ''}>{label}</span>
              </label>
            ))}
          </div>
          <hr className="w-full border-t border-gray-300 mt-4 mb-2" />{' '}
          <button
            className={`${buttonBaseClasses} ${buttonColorClasses[themeColor]}`}
          >
            CONTINUE
          </button>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default AppFeaturesSelection;
