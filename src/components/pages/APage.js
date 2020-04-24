import React, { useEffect } from 'react'

const APage = () => {
    useEffect(() => {
        console.log('A Mount')

        return () => {
            console.log('A Unmount')
        }
    }, [])
    return <div>A 페이지</div>
}

export default APage
