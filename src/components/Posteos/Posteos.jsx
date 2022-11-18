import React from 'react'
import Posteo from '../Posteo/Posteo'

const Posteos = ({recetas}) => {

  return (
    <>
      <div>

          {
              recetas.map((receta, index)=><Posteo key={index} id={receta.id} description={receta.description} img={receta.img} plato={receta.plato}/>)
          }
      </div>
    </>
  )
}

export default Posteos