import React, { useEffect, useState } from 'react'
import Mensajes from '../Mensajes/Mensajes'
import { doc, getDocs, collection, updateDoc, arrayUnion } from "firebase/firestore";
import db from '../../services';
import { useParams } from 'react-router-dom';


const MensajeContainer = () => {
  
  const {id} = useParams()
 
  const [input, setInput] = useState({})
  const [ mensajes, setMensajes] = useState({})
  const [ mensaje, setMensaje ] = useState({
    mensaje:""
  })
  const [ mensajeAgregado, setMensajeAgregado] = useState({})

  useEffect(()=>{

    const mensajesAdd = async()=>{
      try {
        const data = collection(db, "recetas")
        const col = await getDocs(data)
        const res = col.docs.map((doc) =>doc={id:doc.id, ...doc.data()})
        const res2 = res.find(el=>el.id === id)
        const msg = res2.mensaje
        setMensajes(msg)
      } catch (error) {
        console.log(error)
      }
    }
    mensajesAdd()
    return()=>{

    }

  },[id, mensajeAgregado])

  
  
  
  const handleComentario = async (e,mensaje)=>{
    e.preventDefault()
    console.log(e.target[0])
    
    
    debugger
    if(mensaje.mensaje === ""){
      return alert("vacio")
    }
    
    try {
      const {formReset} = e.target[0].value
      console.log(formReset)
      debugger
      const mensajeReceta = doc(db,"recetas",id)
      await updateDoc(mensajeReceta, {mensaje: arrayUnion(mensaje)}).then(alert("agregado"))
      setMensaje(mensajeReceta)
      setMensajeAgregado(mensajeReceta)
      setMensajeAgregado({})
      setMensaje({mensaje:""})
      document.getElementById("#mensaje").reset()

    } catch (error) {
      console.log(error)
    }

  }
    
  return (
    <>
      {
        mensajes.length === undefined ? (<p>cargando</p>) : (<Mensajes mensajes={mensajes}/>)
      }
      <div className='text-center xl:text-left container mx-auto xl:p-72 py-10 flex-col justify-center'>
        <h2 className='uppercase text-fuchsia-700 my-16 font-bold text-3xl'>¿que te pareció esta receta?</h2>
        <form onSubmit={(e)=>handleComentario(e,mensaje)} className='bg-stone-100 rounded-2xl shadow-2xl shadow-slate-600' action="#">
          <div className='pt-10'>
          <label  className='w-full uppercase text-2xl font-bold px-10' htmlFor="mensaje">Deja tu mensaje</label>
          <textarea onChange={e=>setMensaje({
              ...mensaje,    
          [e.target.name]:e.target.value
          })} className='w-full px-10 p-6 rounded-2xl shadow-2xl shadow-slate-600 bg-white mt-10' name="mensaje" id="mensaje" maxLength={280} cols="10" rows="10"></textarea>
          <input  className=' w-full mt-10 uppercase bg-fuchsia-700 text-center text-white  py-3 px-4 rounded-full hover:bg-fuchsia-800 transition-colors ease-in-out duration-500' type="submit" value="Dejar comentario" />
          </div>
        </form>
      </div>
    </>
  )
}

export default MensajeContainer