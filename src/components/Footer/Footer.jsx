import React from 'react'
import { Link, Navigate, NavLink } from 'react-router-dom'


const Footer = () => {

  const url = "www.papelfloreado.ar"


  return (
    <>
        <div className='bg-fuchsia-800 flex-column justify-center text-center text-white mt-16 p-6'>
            <p>Todos los derechos reservados</p>
            <p>Made by @Papelfloreado</p>
            <a href="https://papelfloreado.ar" target="_blank" rel="noopener noreferrer">papelfloreado.ar</a>
        </div>
    </>
  )
}

export default Footer