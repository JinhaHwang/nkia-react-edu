import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Display from './components/Display'
import { Button, DatePicker } from 'antd'
import YearPicker from './components/common/YearPicker'
import MonthPicker from './components/common/MonthPicker'

const DayPicker = (props) => {
    return <DatePicker onChange={props.onChange} picker={props.picker} />
}

function App() {
    const [text, setText] = useState('')
    const [isVisible, setIsVisible] = useState(false)
    const [colorClass, setColorClass] = useState('bg-blue')

    const handleChange = (e) => {
        const { value } = e.target
        setText(value)
    }

    const handleClickBlue = (e) => {
        setColorClass('bg-blue')
    }
    const handleClickRed = (e) => {
        setColorClass('bg-red')
    }

    const handleColorToggle = (e) => {
        if (colorClass === 'bg-red') {
            setColorClass('bg-blue')
        } else {
            setColorClass('bg-red')
        }
    }

    function onChange(date, dateString) {
        console.log(date, dateString)
    }

    const getDatePickerBy = (visible) => {
        if (visible) {
            return (
                <>
                    <YearPicker onChange={onChange} />
                    <MonthPicker onChange={onChange} />
                </>
            )
        }
        return null
    }

    return (
        <div className={`App ${colorClass}`}>
            <DayPicker picker="year" />
            <input type="text" onChange={handleChange} />
            <Display msg={text} />

            <Button type="dashed" onClick={handleColorToggle}>
                배경색 변경
            </Button>
            <Button
                type="dashed"
                onClick={(e) => {
                    setIsVisible(true)
                }}
            >
                나와라 데이트피커
            </Button>
            {/*{getDatePickerBy(isVisible)}*/}
        </div>
    )
}

export default App
