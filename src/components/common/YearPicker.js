import React from 'react'
import { DatePicker } from 'antd'

const YearPicker = (props) => {
    return <DatePicker onChange={props.onChange} picker="year" />
}

export default YearPicker
