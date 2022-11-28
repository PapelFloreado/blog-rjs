import React,{useState} from 'react'
import { updateDoc,doc, arrayUnion } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import db from '../../services'

const MensajeInput = () => {

  const {id} = useParams()

  const [mensaje, setMensaje] = useState({
    mensaje:""
  })

  
  const handleComentario = async (mensaje)=>{
    
    if(mensaje.mensaje === ""){
      return alert("vacio")
    }
    
    try {
      
      const mensajeReceta = doc(db,"recetas",id)
      await updateDoc(mensajeReceta, {mensaje: arrayUnion(mensaje)}).then(alert("agregado"))
      
    } catch (error) {
      console.log(error)
    }

  }
  

  return (
    <>
      <div className=' container mx-auto p-72 py-10 flex-col justify-center'>
        <h2 className='uppercase text-fuchsia-700 my-16 font-bold text-3xl'>¿que te pareció esta receta?</h2>
        <form className='bg-stone-100 rounded-2xl shadow-2xl shadow-slate-600' action="">
          <div className='pt-10'>
          <label  className='w-full uppercase text-2xl font-bold px-10' htmlFor="mensaje">Deja tu mensaje</label>
          <textarea onChange={e=>setMensaje({
              ...mensaje,    
          [e.target.name]:e.target.value
          })} className='w-full p-6 rounded-2xl  bg-white mt-10' name="mensaje" id="mensaje" cols="10" rows="10"></textarea>
          <input onClick={()=>handleComentario(mensaje)} className=' w-full mt-10 uppercase bg-fuchsia-700 text-center text-white  py-3 px-4 rounded-full hover:bg-fuchsia-800 transition-colors ease-in-out duration-500' type="button" value="Dejar comentario" />
          </div>
        </form>
      </div>


    </>
  )
}

export default MensajeInput