import React, { useEffect, useState } from 'react'
import Mensajes from '../Mensajes/Mensajes'
import { doc, getDocs, collection, updateDoc, arrayUnion } from "firebase/firestore";
import db from '../../services';
import SuccessAlert from '../SuccessAlert/SuccessAlert';
import { useParams } from 'react-router-dom';


const MensajeContainer = () => {
  
  const {id} = useParams()
 
  const [ mensajes, setMensajes] = useState({})
  const [ alertaSuccess, setAlertaSuccess] = useState({})
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
        if(res2.mensaje.length === 0){
          return setMensajes(res2)
        }
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

  
  const { mensajeSuccess } = alertaSuccess
  
  const handleComentario = async (e,mensaje)=>{
    e.preventDefault()
    debugger
    console.log(e)
    if(mensaje.mensaje === ""){
      return alert("vacio")
    }
    
    try {

      const mensajeReceta = doc(db,"recetas",id)
      await updateDoc(mensajeReceta, {mensaje: arrayUnion(mensaje)}).then(alert("agregado"))
      setMensaje(mensajeReceta)
      setMensajeAgregado(mensajeReceta)
      setMensajeAgregado({})
      setMensaje({mensaje:""})
      setAlertaSuccess({mensajeSuccess: "Mensaje agregado correctamente"})
      

    } catch (error) {
      console.log(error)
    }

  }
   
  return (
    <>
      {
        mensajes.length > 0   ?  (<Mensajes mensajes={mensajes}/>) : 
        (
          <div>
            <h2 className='uppercase font-bold text-3xl'>Todavia no hay mensajes agregados</h2>
            <p className='uppercase text-2xl mt-10'>Agrega uno</p>
          </div>
        )
      }
      <div className='text-center xl:text-left container mx-auto  xl:p-40 py-10 flex-col justify-center'>
        <h2 className='uppercase text-fuchsia-700 my-16 font-bold text-3xl'>¿que te pareció esta receta?</h2>
        <form onSubmit={(e)=>handleComentario(e,mensaje)} className='bg-stone-100 rounded-2xl shadow-2xl shadow-slate-600' action="#">
          <div className='pt-10'>
          <label  className='w-full uppercase text-2xl font-bold px-10' htmlFor="mensaje">Deja tu mensaje</label>
          <div className='mx-10'>
            <textarea onChange={e=>setMensaje({
                ...mensaje,    
            [e.target.name]:e.target.value
            })} className='w-full px-10 p-6 rounded-2xl shadow-2xl shadow-slate-600 bg-white mt-10' name="mensaje" id="mensaje" maxLength={280} cols="10" rows="10"></textarea>
          </div>
          <input  className=' w-full mt-10 uppercase bg-fuchsia-700 text-center text-white  py-3 px-4 rounded-full hover:bg-fuchsia-800 transition-colors ease-in-out duration-500' type="submit" value="Dejar comentario" />
          </div>
        </form>
        {
          mensajeSuccess && <SuccessAlert className="ease-in-out transition-all duration-500" alertaSuccess={alertaSuccess}/>
        }
      </div>
    </>
  )
}

export default MensajeContainer