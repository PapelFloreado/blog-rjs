import React from 'react'
import {  Link } from 'react-router-dom'
import postre from "../../assets/img/postre.jpg"
import vegetariano from "../../assets/img/vegetariano.jpg"
import pasta from "../../assets/img/pasta.png"
import carne from "../../assets/img/carne.jpg"
import salmon from "../../assets/img/salmon.jpg"
import legumbre from "../../assets/img/legumbres.jpg"

const CategoriaListContainer = () => {
  
      
  return (
    <>
      <h2 className='uppercase md:text-6xl text-fuchsia-700 text-4xl font-bold text-center mt-16'>Elige una <span className='text-black'>categoría</span></h2>
      <div className='md:flex justify-center mx-auto container mt-16'>
        <div className='mx-4 mt-10'>
          <img className='rounded-2xl w-full mb-4 shadow-2xl shadow-slate-600' src={vegetariano} alt="vegetariano" />
          <Link type='button' className='bg-fuchsia-700 w-full  py-4 px-4 uppercase text-white rounded-full hover:bg-fuchsia-900 text-center transition-colors duration-300' to="/categoria/vegetariano">vegetariano</Link>
        </div>
        <div className='mx-4 mt-10'>
          <img className='rounded-2xl w-full  mb-4 shadow-2xl shadow-slate-600' src={salmon} alt="salmon" />
          <Link type='button' className='bg-fuchsia-700 w-full py-4 px-4 uppercase text-white rounded-full hover:bg-fuchsia-900 text-center transition-colors duration-300' to="/categoria/pescado">pescado</Link>
        </div>
        <div className='mx-4 mt-10'>
          <img className='rounded-2xl  w-full mb-4 shadow-2xl shadow-slate-600' src={carne} alt="carne" />
            <Link type='button' className='bg-fuchsia-700 w-full  py-4 px-4 uppercase text-white rounded-full hover:bg-fuchsia-900 text-center transition-colors duration-300' to="/categoria/carnes">carnes</Link>
          </div>
      </div>
      <div className='md:flex justify-center mx-auto container mt-16'>
        <div className='mx-4  mt-10'>
          <img className='rounded-2xl  w-full mb-4 shadow-2xl shadow-slate-600' src={pasta} alt="pasta" />
          <Link type='button' className='bg-fuchsia-700 w-full py-4 px-4 uppercase text-white rounded-full hover:bg-fuchsia-900 text-center transition-colors duration-300' to="/categoria/pastas">pastas</Link>
        </div>
        <div className='mx-4 mt-10'>
          <img className='rounded-2xl  w-full mb-4 shadow-2xl shadow-slate-600' src={postre} alt="postre" /> 
          <Link type='button' className='bg-fuchsia-700 py-4 px-4 w-full uppercase text-white rounded-full hover:bg-fuchsia-900 text-center transition-colors duration-300' to="/categoria/postre">postre</Link>
        </div>
        <div className='mx-4 mt-10'>
          <img className='rounded-2xl  w-full mb-4 shadow-2xl shadow-slate-600' src={legumbre} alt="legumbres" />
          <Link type='button' className='bg-fuchsia-700 py-4 px-4 uppercase w-full text-white rounded-full hover:bg-fuchsia-900 text-center transition-colors duration-300' to="/categoria/legumbres">legumbres</Link>
        </div>
      </div>
    </>
  )
}

export default CategoriaListContainer