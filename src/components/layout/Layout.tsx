import React from 'react'
import SidePanel from './sidePanel/SidePanel'
import { Outlet } from 'react-router-dom'

const Layout:React.FC = () => {
  return (
    <div className='flex'>
        <SidePanel />
        <Outlet />
    </div>
  )
}

export default Layout