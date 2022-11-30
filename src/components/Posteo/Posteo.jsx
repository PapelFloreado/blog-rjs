import React from 'react'
import { Link } from 'react-router-dom'

const Posteo = ({plato, description, img ,id}) => {

    
    return (
        <>
            <div className='lg:flex flex lg:justify-center mx-auto w-full lg:w-1/3 container mt-16'>
                <div className='mx-4 mt-10'>
                    <img className='rounded-2xl mb-4 shadow-2xl shadow-slate-600  w-[350px] h-[350px]' src={img} alt={description} /> 
                    <h2 className='text-xl text-center font-bold px-10'>{plato}</h2>
                    <p className='text-xl'>{description}</p>
                    <Link className='bg-fuchsia-700 w-full  py-4 px-4 uppercase text-white rounded-full hover:bg-fuchsia-900 text-center transition-colors duration-300' type='button'  to={`receta-detail/${id}`}>
                       Ir a la Receta
                    </Link>
                </div>
            </div>

        </>
    )
}

export default Posteo