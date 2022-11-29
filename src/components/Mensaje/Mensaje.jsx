import React from 'react'

const Mensaje = ({mensaje}) => {
    
  return (
    <>
        <blockquote className='italic text-xl xl:text-left text-center'>"{mensaje}"</blockquote>
    </>
  )
}

export default Mensaje