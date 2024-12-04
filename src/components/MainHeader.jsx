import React from 'react'
import { Outlet } from 'react-router-dom'
import { GoBack } from './GoBack'

export const MainHeader = () => {
  return (
    <div>
        <Outlet/>
        <GoBack/>
    </div>
  )
}
