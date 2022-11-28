import React from 'react'

const Mensaje = ({mensaje}) => {
    
  return (
    <>
        <blockquote className='italic text-xl'>"{mensaje}"</blockquote>
    </>
  )
}

export default Mensaje