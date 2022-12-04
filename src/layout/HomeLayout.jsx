import React from 'react'
import { Outlet } from 'react-router-dom'

const homeLayout = () => {
  return (
        <>
          <Outlet/>
        </>
       
  )
}

export default homeLayout