import React from 'react';
import CompanyLogo from './components/CompanyLogo';
import ColorPreset from './components/ColorPreset';
import AppFeaturesSelection from './components/AppFeaturesSelection';
import './index.css'; // or './styles.css'

function App() {
  return (
    <div className="App">
      <AppFeaturesSelection />
    </div>
  );
}

export default App;
