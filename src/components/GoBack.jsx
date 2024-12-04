import React from 'react'
import { useNavigate } from 'react-router-dom'

export const GoBack = () => {
    const navigate = useNavigate()
    function backHandler() {
        navigate(-1)
    }
  return (
    <div>
        <button onClick={backHandler}>GO BACK</button>
    </div>
  )
}
