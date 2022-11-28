import React, {useEffect} from 'react'
import Mensaje from "../Mensaje/Mensaje"

const Mensajes = ({mensaje}) => {
    

    
  
  return (
    <>
        <h2 className='font-bold text-fuchsia-700 uppercase text-3xl'>Comentarios</h2>
        {
            mensaje.map((el,index)=>(
                <Mensaje key={index} mensaje={el.mensaje}/>
            ))
        }
    </>

  )
}

export default Mensajes