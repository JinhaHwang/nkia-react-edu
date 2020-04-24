import React, { useState } from 'react'
import { Button, Input } from 'antd'
import { isEmpty } from 'lodash'

const TodoList = (props) => {
    const [inputText, setInputText] = useState('')
    const { items, id, setItems } = props

    const getTodosBy = (id) => items.find((item) => item.id === id).values

    const handleInputText = (e) => {
        const { value } = e.target
        setInputText(value)
    }

    const handleSaveTodo = (e) => {
        console.log(inputText)
        const newItems = items
            ? items.concat()
            : [
                  {
                      id,
                      title: '',
                      values: [],
                  },
              ]
        const currentTodo = newItems.find((item) => item.id === id)
        currentTodo.values.push({
            index: currentTodo.values.length,
            text: inputText,
            done: false,
            createDate: new Date(),
        })
        setItems(newItems)
        setInputText('')
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleSaveTodo()
        }
    }

    return (
        <>
            <ul>
                {!isEmpty(items) &&
                    getTodosBy(id).map((todo) => (
                        <li key={`key_${todo.index}`}>{todo.text}</li>
                    ))}
            </ul>
            <Input
                value={inputText}
                onChange={handleInputText}
                onKeyPress={handleEnter}
            />
            <Button type="primary" onClick={handleSaveTodo}>
                추가
            </Button>
        </>
    )
}

export default TodoList
