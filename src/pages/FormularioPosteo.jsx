import { addDoc, collection } from 'firebase/firestore'
import { getStorage, ref } from "firebase/storage";
import React, { useState } from 'react'
import Alerta from '../components/Alerta/Alerta'
import { UserAuth } from '../context/AuthContext'
import db, { storage } from "../services/index.js"

const FormularioPosteo = () => {

    const { user } = UserAuth()

    const [ formulario, setFormulario ] = useState({
        plato:"",
        description:"",
        procedimientos:"",
        tiempo:"",
        img:""
    })

    const [ alerta, setAlerta ] = useState({})

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const {plato, description, procedimientos,tiempo,img} = formulario
        if(plato === "" || description === "" || procedimientos === "" || tiempo === "" || img === ""){
            return setAlerta({msg: "Todos los campos son obligatorios"}) 
        }
        debugger

        try {
            const url = img.name
            const ref = "recetaImagen/"
            aca tira error
            const refDb = storage.ref(`${ref}${url}`)
            const snap = await refDb.put(file)
            if(snap.state === 'success') { // si se subio la imagen entrara aqui
              const url = await snap.ref.getDownloadURL(); // obtenemos la url de la imagen
              urlImage = url; // seteamos el valor de la url ala variable
          }
              console.log(url)
            const col = collection(db,"recetas")
            await addDoc(col, formulario).then(alert("agregado"))
        } catch (error) {
          console.log(error)
        }
    }

    const {msg} = alerta

      return (
        <>
          <h1 className='text-center uppercase font-bold text-3xl'>Hola! <span className=' text-fuchsia-700 '>{user?.displayName}</span></h1>
          <div className='flex containter mx-auto justify-center pt-10'>
              <form onSubmit={handleSubmit}   className='bg-stone-100 m-5 p-10 rounded-xl' action="">
                {
                  msg && <Alerta alerta={alerta}/>
                }
                  <h2 className='text-xl uppercase text-fuchsia-800 font-bold'>Agrega una nueva Receta</h2>
                  <div className='mt-10'>
                      <label className='uppercase text-md' htmlFor="plato">Nombre de tu Receta</label>
                      <input className='w-full p-3 rounded-xl mt-5 border' type="text" onChange={e=>setFormulario({
                          ...formulario,
                            [e.target.name] : e.target.value
                      })} name="plato" id="plato" placeholder='El nombre de tu receta' />  
                  </div>  
                  <div className='mt-10'>
                      <label className='uppercase text-md' htmlFor="description">Descripción</label>
                      <input className='w-full p-3 rounded-xl mt-5 border' type="text"  onChange={e=>setFormulario({
                          ...formulario,
                            [e.target.name] : e.target.value
                      })} name="description" id="description" placeholder='Describe tu receta' />  
                  </div>  
                  <div className='mt-10'>
                      <label className='uppercase text-md' htmlFor="procedimientos">Procedimientos de tu receta</label>
                      <textarea className='w-full p-3 rounded-xl mt-5 border' type="text"  onChange={e=>setFormulario({
                          ...formulario,
                            [e.target.name] : e.target.value
                      })} name="procedimientos" id="procedimientos" placeholder='Escribe paso a paso tu receta' />  
                  </div> 
                  <div className='mt-10'>
                      <label className='uppercase text-md' htmlFor="tiempo">Tiempo de cocción</label>
                      <input className='w-full p-3 rounded-xl mt-5 border' type="text"  onChange={e=>setFormulario({
                          ...formulario,
                            [e.target.name] : e.target.value
                      })} name="tiempo" id="tiempo" placeholder='Agrega cuanto tiempo necesitas para esta receta' />  
                  </div> 
                  <div className='mt-10 mb-10'>
                      <label className='uppercase text-md' htmlFor="description">Agrega una imagen de tu Receta</label>
                      <input type="file" name="img"  onChange={e=>setFormulario({
                          ...formulario,
                            [e.target.name] : e.target.value
                      })} id="img" />
                  </div>
                  <input className='w-full p-3 rounded-full text-center uppercase text-white text-xl bg-fuchsia-700' type="submit" value="Sube tu Receta" />
                  
              </form>
          </div>
        </>
      )
}

export default FormularioPosteo