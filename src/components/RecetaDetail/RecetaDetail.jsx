import React, { useEffect, useState } from 'react'
import Spinner from '../Spinner/Spinner'
import Clock from '../Clock/Clock'
import Heart from '../Heart/Heart'
import db from '../../services'
import { updateDoc, doc} from 'firebase/firestore'
import redHeart from "../../assets/img/like.svg"
import MensajeContainer from '../MensajeContainer/MensajeContainer'



const RecetaDetail = ({item}) => {
  
  const { plato, ingredientes, img, description, procedimientos, tiempo, displayName, puntaje, id} = item

  const [like, setLike] = useState()
  const [heart, setHeart] = useState(false)
 

  useEffect(() => {
    const addLike = ()=>{
      let like = puntaje
      setLike(like)
    }
   
  
    addLike()
    
    return () => {
      
    }
  }, [puntaje])

  

  const handleLike = async (id)=>{
    setHeart(true)
    if(setHeart === true){
      alert("Ya le diste like a esta receta!")
    }
    try {
      const like = puntaje + 1
      const suma = doc(db,"recetas", id)
      await updateDoc(suma,{puntaje: like})
      setLike(puntaje +1)
      

    } catch (error) {
      console.log(error)
    }
  }

 
  return (
     
      <>
      {

        !item.plato ? <Spinner/> :
        
        <div>

            <h1 className='text-center uppercase font-bold text-fuchsia-700 text-6xl my-16'>{plato}</h1>
            <img className='flex justify-center container mx-auto w-2/4 shadow-2xl shadow-slate-700  rounded-3xl' src={img} alt={plato} />
            <div>
              <h3 className='text-center my-16 text-xl'>{description}</h3>
              <h2 className='text-3xl  font-bold uppercase mx-auto container mt-20 text-center'>Ingredientes</h2>
              <div className='flex justify-center'>

              <table  className="table-auto text-center mt-10">
                    <thead>
                      <tr>
                        <th className='uppercase px-5 text-xl'>Nombre</th>
                        <th className='uppercase px-5 text-xl'>Cantidad</th>
                        <th className='uppercase px-5 text-xl'>Unidades</th>
                      </tr>
                    </thead>
                {

                  ingredientes.map((ingrediente, index)=>(
                    
                    <tbody key={index}>
                      <tr>
                        <td className='uppercase'>{ingrediente.nombre}</td>
                        <td className='uppercase'>{ingrediente.cantidad}</td>
                        <td className='uppercase'>{ingrediente.medida}</td>
                      </tr>
                    </tbody>
                    
                    ))
                    
                  }
                  </table>
            
            </div>
            <div className='container mx-auto'>
                <div className='flex mt-10 place-content-center items-center justify-center'>
                  <p className=' uppercase font-bold text-xl text-fuchsia-800'>Tiempo de Coccion</p>
                  <Clock/>
                <h3 className='text-2xl'>{tiempo}</h3>
                </div>
                <h2 className='uppercase text-center xl:text-left text-3xl font-bold my-10'>Procedimientos</h2>
                {
                  procedimientos.map((procedimientos, index)=>(
                    <div className='my-10' key={index}>
                    <h2 className='font-bold xl:text-left text-center text-2xl text-fuchsia-800'>Paso {index +1}</h2>
                    <p  className='xl:text-left text-center text-xl'>{procedimientos.procedimientos}</p>
                    </div>
                  ))
                }
                <MensajeContainer></MensajeContainer> 
                <div className='flex justify-center text-center my-16'>
                {
                  heart === true ? (<p className='text-xl mx-auto'>likes<span><img className="w-10 h-10" src={redHeart} alt="heart" /></span>{like}</p>) : (<button onClick={()=>handleLike(id)}>
                  <p className='text-xl mx-auto'>likes<span><Heart/></span>
                  {like}
                  </p>
                </button>)              
                }
                </div>
                
                <p className='text-center text-lg'>Receta realizada por <span className='uppercase font-bold'>{displayName}</span></p>

            </div>
            </div>
        </div>
      
      }

        
        
        
        </>
          
      
  )
}

export default RecetaDetail