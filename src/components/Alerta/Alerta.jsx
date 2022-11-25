import React from 'react'

const Alerta = ({alerta}) => {


    return (
        
        <div className='text-center mb-10 bg-red-500 text-white uppercase py-3 rounded-xl'>{alerta.msg}</div>
    )
}

export default Alerta