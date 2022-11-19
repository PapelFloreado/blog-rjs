import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import Alerta from '../components/Alerta/Alerta'
import Spinner from '../components/Spinner/Spinner';
import { UserAuth } from '../context/AuthContext'
import db from "../services/index.js"
import { uploadFile } from '../services/index.js';
import Check from '../components/Check/Check';

const FormularioPosteo = () => {

    const { user } = UserAuth()

    const { displayName } = user

    const [ spinner, setSpinner] = useState(false)

    const [ check, setCheck ] = useState(false)

    const [file, setFile] = useState(null)

    const [ alerta, setAlerta ] = useState({})
      
    const [ formulario, setFormulario ] = useState({
      
          plato:"",
          description:"",
          ingredientes:"",
          procedimientos:"",
          tiempo:"",
          tags:"",
          img:null,
          displayName
    })

    const handleUpload = async (e)=>{
        e.preventDefault()
        try {
          setSpinner(true)
          const result = await uploadFile(file)
          setFormulario({
            
            plato:plato.value,
            description:description.value,
            ingredientes:ingredientes.value,
            procedimientos:procedimientos.value,
            tiempo:tiempo.value,
            tags:tags.value,
            img:result,
            displayName            
            })
          setSpinner(false)
          setCheck(true)
        } catch (error) {
          console.log(error)
        }
    }

    const handleSubmit = async (formulario)=>{ 

      const {plato, description, procedimientos, ingredientes,tiempo, img, tags} = formulario

      if(img === null){
        return setAlerta({msg:"Recuerda subir una imagen"})
      }

      if(plato === "" || description === "" || procedimientos === "" || tiempo === "" || img=== null  || ingredientes === "" || tags === ""){
        return setAlerta({msg: "Todos los campos del formulario son obligatorios"}) 
      }

      try {
          const col = collection(db,"recetas")
          await addDoc(col, formulario).then(alert("Receta agregada"))
          } catch (error) {
            console.log(error)
          }
  
  }
    

    const {msg} = alerta

      return (
        <>
          <h1 className='text-center uppercase font-bold text-3xl'>Hola! <span className=' text-fuchsia-700 '>{user?.displayName}</span></h1>
          <div className='flex containter mx-auto justify-center pt-10'>
              <form   className='bg-stone-100 m-5 p-10 rounded-xl' action="">
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
                      <label className='uppercase text-md' htmlFor="ingredientes">Ingredientes</label>
                      <textarea className='w-full p-3 rounded-xl mt-5 border' type="text"  onChange={e=>setFormulario({
                          ...formulario,
                            [e.target.name] : e.target.value
                      })} name="ingredientes" id="ingredientes" placeholder='Coloca tus ingredientes' />  
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
                      <div className='flex items-center '>
                      <input className=''  onChange={e=>setFile(e.target.files[0])} type="file" name="" id="file" />
                          <button type='button' className=' items-center w-1/3 bg-fuchsia-700 rounded-xl text-white uppercase mx-3 py-3 px-3 ' onClick={handleUpload}>subir</button>
                          <div className=' items-center'>
                              {spinner === true ? <span><Spinner/></span> : check === true && spinner === false ? <span><Check/></span>  : <div></div>}
                          </div>
                      </div>
                  </div>
                  <div className='mt-10 mb-10'>
                      <label className='uppercase text-md' htmlFor="tiempo">Tags</label>
                      <input className='w-full p-3 rounded-xl mt-5 border' type="text"  onChange={e=>setFormulario({
                          ...formulario,
                            [e.target.name] : e.target.value
                      })} name="tags" id="tags" placeholder='Agrega palabras claves para la búsqueda' />  
                  </div>
                  {msg && <Alerta alerta={alerta}/>}
                  <input className='w-full hover:bg-fuchsia-800 transition-colors duration-500 cursor-pointer p-3 rounded-full text-center uppercase text-white text-xl bg-fuchsia-700' onClick={()=>handleSubmit(formulario)} type="button" value="Sube tu Receta" />   
              </form>
          </div>
        </>
      )
}

export default FormularioPosteo