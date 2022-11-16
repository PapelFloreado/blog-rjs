import React from 'react'
import { Outlet } from 'react-router-dom'

const homeLayout = () => {
  return (
        <main className=''>
            <Outlet/>
        </main>
  )
}

export default homeLayout