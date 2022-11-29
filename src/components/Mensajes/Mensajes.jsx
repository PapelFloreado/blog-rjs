import React, {useEffect} from 'react'
import Mensaje from "../Mensaje/Mensaje"

const Mensajes = ({mensajes}) => {
    
 

  
  return (
    <>
        <h2 className='font-bold xl:text-left text-center uppercase text-3xl'>Mensajes</h2>
        {
            mensajes.map((el,index)=>(
                <Mensaje key={index} mensaje={el.mensaje}/>
            ))
        }
    </>

  )
}

export default Mensajes