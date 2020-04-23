import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Display from "./components/Display";

function App() {
  const [text, setText] = useState('')
  const [colorClass, setColorClass] = useState('bg-blue')

  const handleChange = e => {
    const { value } = e.target
    setText(value)
  }

  const handleClickBlue = e => {

    setColorClass('bg-blue')
  }
  const handleClickRed = e => {
    setColorClass('bg-red')
  }

  const handleColorToggle = e => {
    if (colorClass === 'bg-red') {
      setColorClass('bg-blue')
    } else {
      setColorClass('bg-red')
    }
  }

  return (

    <div className={`App ${colorClass}`}>
      <input type="text" onChange={handleChange} />
      <Display msg={text} />

      <button onClick={handleColorToggle}
      >배경색 변경</button>
    </div>
  )

      ;
}

export default App;
