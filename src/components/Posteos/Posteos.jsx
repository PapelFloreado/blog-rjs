import React from 'react'
import Posteo from '../Posteo/Posteo'

const Posteos = ({posteos}) => {

  return (
    <>
      <div>

          {
              posteos.map((posteo, index)=><Posteo key={index} id={posteo.id} description={posteo.description} img={posteo.img} title={posteo.title}/>)
          }
      </div>
    </>
  )
}

export default Posteos