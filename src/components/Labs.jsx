import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Labs = () => {
    const navigate = useNavigate()
    function clickHandler() {
        navigate("/")
    }
    return (
        <div>
            Labs
            <div>
                <button onClick={clickHandler}>Go to Home</button>
            </div>
        </div>
    )
}
