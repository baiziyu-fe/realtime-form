import React from 'react'
import CurrentStateForm, { initDefaultValue } from './components/current-state-form'
import 'antd/dist/antd.css';
import './App.css'
import DataPreviewCard from './components/data-preview-card';
function App() {
  return (
    <div className="App">
      <CurrentStateForm />
      <DataPreviewCard
        formData={initDefaultValue}
      />
    </div>
  )
}

export default App
