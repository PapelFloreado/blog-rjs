import React from 'react'
import { Link } from 'react-router-dom'

const Posteo = ({plato, description, img ,id}) => {

    
    return (
        <>
            <div className='flex items-center pt-16'>
                <div className=' w-1/6'>
                   <img className=' rounded-full w-1/2' src={img} alt={description} />
                </div>
                <h2 className='font-bold px-10'>{plato}</h2>
                <p>{description}</p>
                <Link to={`receta-detail/${id}`}>
                    <button className='mx-10 py-3 hover:bg-fuchsia-800 transition-colors duration-500 px-5 uppercase rounded-full bg-fuchsia-700 text-white' type='button'>Ir a la Receta
                    </button>
                </Link>
                
                
            </div>

        </>
    )
}

export default Posteo