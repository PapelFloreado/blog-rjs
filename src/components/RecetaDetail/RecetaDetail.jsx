import React from 'react'

const RecetaDetail = ({item}) => {

  const { plato } = item
  return (
      <>
          <h1 className='text-center text-4xl'>{plato}</h1>  
      </>
  )
}

export default RecetaDetail