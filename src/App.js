import React, { useEffect, useState } from 'react'
import { Link, Router } from '@reach/router'
import { Button, Layout } from 'antd'

import './App.css'
import TodoList from './components/pages/TodoList'
import APage from './components/pages/APage'

const { Sider, Content } = Layout

function App() {
    const [items, setItems] = useState(null)
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('items'))
        setItems(data)

        return () => {
            localStorage.setItem('items', JSON.stringify(items))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])

    const saveItems = (newItems) => {
        setItems(newItems)
    }

    const handleRemoveAll = () => {
        setItems(null)
    }

    return (
        <Layout
            style={{
                height: '100vh',
            }}
        >
            <Sider>
                <Link
                    to="/todos/today"
                    style={{
                        display: 'block',
                        color: 'white',
                    }}
                >
                    오늘 할 일
                </Link>
                <Link
                    to="/todos/shop"
                    style={{
                        display: 'block',
                        color: 'white',
                    }}
                >
                    장 볼 것
                </Link>
                <Button onClick={handleRemoveAll}>X</Button>
            </Sider>
            <Layout>
                <Content>
                    <Router>
                        <TodoList path="/" />
                        <TodoList
                            path="/todos/:id"
                            items={items}
                            setItems={saveItems}
                        />
                    </Router>
                </Content>
            </Layout>
        </Layout>
    )
}

export default App
