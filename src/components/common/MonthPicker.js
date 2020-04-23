import React from 'react'
import { DatePicker } from 'antd'

const MonthPicker = (props) => {
    return <DatePicker onChange={props.onChange} picker="month" />
}

export default MonthPicker
