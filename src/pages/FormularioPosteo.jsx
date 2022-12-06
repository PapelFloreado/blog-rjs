import { addDoc, collection } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import Alerta from '../components/Alerta/Alerta'
import Spinner from '../components/Spinner/Spinner';
import { UserAuth } from '../context/AuthContext'
import db from "../services/index.js"
import { useNavigate } from 'react-router-dom';
import CropEasy from '../components/Crop/CropEasy';
import SuccessAlert from '../components/SuccessAlert/SuccessAlert';



const FormularioPosteo = () => {
    const [ success, setSuccess] = useState(false)
    const [ loading, setLoading] = useState(false)
    const [ img, setImg] = useState()
    const [photoURL, setPhotoURL] = useState(null);
    const [openCrop, setOpenCrop] = useState(false);
    const { user } = UserAuth()
    const {displayName} = user
    const navigate = useNavigate()    
    const [ spinner, setSpinner] = useState(false)    
    const [ check, setCheck ] = useState(false)    
    const [file, setFile] = useState(null)    
    const [ procedimientos, setProcedimientos ] = useState([{}])    
    const [ alerta, setAlerta ] = useState({})
    const [ imgUrl, setImgUrl] = useState(null)    
    const [ alertaSuccess, SetAlertaSuccess] = useState({})
    const [ingredientes, setIngredientes] = useState([{nombre:"",cantidad:"",medida:""}])   
    const [ formulario, setFormulario ] = useState({
      
      
      plato:"",
      description:"",
      categoria:"",
      ingredientes,
      procedimientos,
      tiempo:"",
      tags:"",
      img,
      usuario:"",
      puntaje: 1,
      mensaje:""   
        })

      useEffect(()=>{
        setFormulario({
        
          plato:plato.value,
          description:description.value,
          categoria:categoria.value,
          ingredientes,
          procedimientos,
          tiempo:tiempo.value,
          tags:tags.value,
          img,
          puntaje: 1
        })
      },[ingredientes, procedimientos])
        
      const handleServiceChange = (e, index) => {
      const { name, value } = e.target;
      const list = [...ingredientes];
      list[index][name] = value;
      setIngredientes(list);
    };

    const handleProcedimientos = (e, index) => {
      const { name, value } = e.target;
      const list = [...procedimientos];
      list[index][name] = value;
      setProcedimientos(list);
    };

    
    const handleAddIngredient = ()=>{
      setIngredientes([...ingredientes, {nombre: "",cantidad: "",medida: ""}])
    }
    
    const handleAddProcedimiento = ()=>{
      setProcedimientos([...procedimientos,{}])
    }

    const handleImg = (e) => {
      const file = e.target.files[0];
      if (file) {
        setFile(file);
        setPhotoURL(URL.createObjectURL(file));
        setOpenCrop(true);   
      }   
    };

    const handleSubmit = async (formulario)=>{

      const url = document.querySelector("#dataUrl").getAttribute("data-set")
      formulario.img = url
      const usuario = displayName
      formulario.usuario = usuario

      const {plato, categoria, description, procedimientos, ingredientes,tiempo, img} = formulario

      setFormulario({
            plato:plato.value,
            description:description.value,
            categoria:categoria.value,
            ingredientes,
            procedimientos,
            tiempo:tiempo.value,
            tags:tags.value,
            img:url,
            usuario,
            puntaje: 1,
            mensaje:"" 
      })

      if( plato,categoria,description,procedimientos,ingredientes,tiempo === undefined || plato,categoria,description,procedimientos,ingredientes,tiempo === "" ){
        return setAlerta({msg: "Todos los campos del formulario son obligatorios"}) 
      }
      
      if(img === null || img === undefined || img === ""){
        return setAlerta({msg:"Recuerda subir una imagen"})
      }
      
      try {
      
          setSpinner(true)
          const col = collection(db,"recetas")
          await addDoc(col, formulario)
          setSuccess(true)
          setSpinner(false)
          SetAlertaSuccess({mensaje: "Receta cargada con exito"})
          setFormulario({
            plato:"",
            description:"",
            categoria:"",
            ingredientes,
            procedimientos,
            tiempo:"",
            tags:"",
            img,
            usuario:"",
            puntaje: 1,
            mensaje:""
          })

          
          } catch (error) {
            console.log(error)
          }
  
  }

    const {msg} = alerta
    const {mensaje} = alertaSuccess

      return (
        <>
       
          <h1 className='text-center uppercase font-bold text-xl lg:text-3xl mt-20'>Hola! <span className=' text-fuchsia-700 '>{user?.displayName}</span></h1>
          <div className='flex-col  lg:mx-64 containter mx-auto justify-center pt-10'>
              <form   className='bg-stone-100 lg:m-5 p-4 lg:p-10 rounded-xl shadow-2xl shadow-slate-600' action="">
                  <h2 className='lg:text-xl text-lg uppercase text-fuchsia-800 font-bold'>Agrega una nueva Receta</h2>
                  <div className='mt-10'>
                      <label className='uppercase text-md' htmlFor="plato">Nombre de tu Receta</label>
                      <input className='w-full p-3 rounded-xl mt-5 border' type="text" onChange={e=>setFormulario({
                          ...formulario,
                            [e.target.name] : e.target.value
                      })} name="plato" id="plato" max={100} placeholder='El nombre de tu receta' />  
                  </div>  
                  <div className='mt-10'>
                      <label className='uppercase text-md' htmlFor="description">Descripción</label>
                      <input className='w-full p-3 rounded-xl mt-5 border' type="text" maxLength="140"  onChange={e=>setFormulario({
                          ...formulario,
                            [e.target.name] : e.target.value
                      })} name="description" id="description" placeholder='Describe tu receta' />  
                  </div>
                  <div className='mt-10'>
                    <label className='uppercase mr-16' htmlFor="categoria">Tipo de receta</label>
                    <select onChange={e=>setFormulario({
                      ...formulario,
                      [e.target.name]:e.target.value
                    })} className='p-3 border rounded-xl' name="categoria" id="categoria">
                      <option value="">Elige un tipo de receta</option>
                      <option value="postre">postre</option>
                      <option value="pescado">pescado</option>
                      <option value="desayunos">desayunos</option>
                      <option value="carnes">carnes</option>
                      <option value="legumbres">legumbres</option>
                      <option value="pastas">pastas</option>
                      <option value="vegetariano">vegetariano</option>
                    </select>

                  </div>
                  <div className='mt-10'>
                    <label className='uppercase text-md w-full' htmlFor="ingredientes">Ingredientes</label>
                      {

                        ingredientes.map((ingre, index)=>(
                          <div className='mt-5' key={index} >
                              <input className="rounded-xl border p-3" placeholder='Ingrediente'  type="text" name="nombre" id="nombre" value={ingre.nombre} onChange={(e) => handleServiceChange(e, index)}></input>
                              <input className="rounded-xl border p-3" placeholder='Cantidad' type="number" min={1} max={9999} name="cantidad" id="cantidad" value={ingre.cantidad} onChange={(e) => handleServiceChange(e, index)}></input>
                              <select className='p-3 border rounded-xl' onChange={(e) => handleServiceChange(e, index)} value={ingre.medida} name='medida' id='medida'>
                                  <option value="">Elige una medida</option>
                                  <option value="ml">ml</option>
                                  <option value="lt">litro</option>
                                  <option value="cm3">cm3</option>
                                  <option value="gr">gr</option>
                                  <option value="kg">kg</option>
                                  <option value="cucharadita">cucharadita</option>
                                  <option value="cucharada">cucharada</option>
                                  <option value="unidades">unidades</option>
                                  <option value="pizca">pizca</option>
                              </select>
                              <button onClick={handleAddIngredient} className='px-3 text-white rounded-xl mx-10 bg-fuchsia-700' type='button'>+</button>
                          </div>
                        ))

                      }       
                    </div>
                    <div className='mt-10'>
                      <label className='uppercase text-md' htmlFor="procedimientos">Procedimientos de tu receta</label>

                        {
                          procedimientos.map((paso, index)=>(
                            <div className='my-3' key={index}>
                            <h2>Paso {index +1}</h2>
                            <textarea className='w-full p-3 rounded-xl mt-5 border' type="text"  onChange={e=>handleProcedimientos(e, index)} value={paso.procedimientos} name="procedimientos" id="procedimientos" placeholder='Escribe paso a paso tu receta' />  
                      
                          <button onClick={handleAddProcedimiento} className='px-3 text-white rounded-xl py-2 w-full bg-fuchsia-700' type='button'>Agregar paso</button>
                         </div> 
                          ))
                        }

                    </div>
                  <div className='mt-10'>
                      <label className='uppercase text-md' htmlFor="tiempo">Tiempo de cocción</label>
                      <input className='w-full p-3 rounded-xl mt-5 border' type="text"  onChange={e=>setFormulario({
                          ...formulario,
                            [e.target.name] : e.target.value
                      })} name="tiempo" id="tiempo" placeholder='Agrega cuanto tiempo necesitas para esta receta' />  
                  </div> 
                  <div className='mt-10 mb-10 '>
                    
                      <label className='uppercase text-md' htmlFor="img">Agrega una imagen de tu Receta</label>
                      <div  className='flex items-center '>

                          {
                            openCrop === true ? (<CropEasy photoURL={photoURL}></CropEasy>): (<input className=''  onChange={handleImg} accept="img/jpg" type="file" name="img" id="file" />)
                          }

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
                  <div>
                    {
                      spinner === true ? (<Spinner></Spinner>) : (<div></div>)
                    }
                  </div>
                  <input className='w-full hover:bg-fuchsia-800 transition-colors duration-500 cursor-pointer p-3 rounded-full text-center uppercase text-white text-xl bg-fuchsia-700' onClick={()=>handleSubmit(formulario)} type="button" value="Sube tu Receta" />   
              </form>
              <div className='flex justify-end relative'>
                  {
                     mensaje && <SuccessAlert className="ease-in-out transition-all duration-500" alertaSuccess={alertaSuccess}/>
                  }
              </div>
                
          </div>
        </>
      )
}

export default FormularioPosteo