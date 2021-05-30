import React, { useState } from 'react'
import CurrentStateForm, { initDefaultValue } from './components/current-state-form'
import 'antd/dist/antd.css';
import './App.css'
import DataPreviewCard from './components/data-preview-card';
function App() {
  const [formData, setFormData] = useState(initDefaultValue)
  return (
    <div className="App">
      <CurrentStateForm
        setData={setFormData}
      />
      <DataPreviewCard
        formData={formData}
      />
    </div>
  )
}

export default App
