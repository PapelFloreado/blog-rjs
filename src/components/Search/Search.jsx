import React, { useState } from 'react'
import Alerta from '../Alerta/Alerta'
import { getDocs, query, where, collection} from 'firebase/firestore'
import db from '../../services'
import { Link } from 'react-router-dom'


const Search = () => {

    const [ alerta, setAlerta ] = useState({})

    const [ idSearch, setIdSearch] = useState(false)

    const [search, setSearch ] = useState({
        buscar:""
    })
    
    const [ url, setUrl ] = useState("")

    const { buscar } = search

    const handleChange = (e)=>{
        const {name, value} = e.target
        setSearch({
            ...search,
                buscar,
                [name]:value
        })
    }

    const handleSearch = async(search)=>{
        
        const { buscar } = search

        if(buscar === ""){
            return setAlerta({msg: "Debes ingresar un palabra para buscar"})
        }
        
        try {
        
            const q = query(collection(db, "recetas"), where("plato", "==", buscar));
            const querySnapshot = await getDocs(q); 
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                const url=doc.id
                setAlerta(false)
                setIdSearch(true)
                setUrl(url)
            
            });
           
          
        } catch (error) {
            console.log(error)
        }
        
    }
    const { msg } = alerta

  return (
    <div className='flex justify-center container  items-center  mx-auto mt-10'>
        <p className='text-center text-2xl mx-5 uppercase font-bold text-fuchsia-700'>Busca aquí una Receta</p>
        <input onChange={handleChange} value={buscar} className='border p-3  shadow-md shadow-slate-600 rounded-xl' type="search" name="buscar" id="buscar" />
        <button onClick={()=>handleSearch(search)} className='mx-10 rounded-full bg-fuchsia-700 text-white uppercase p-3'>Buscar</button>
        <div className='flex-column'>

            {
                
                msg && <Alerta alerta={alerta}/>
            }
        </div>
            {
                idSearch === true ? (
                
                url.map((e, index)=>(
                    <div key={index}>
                        <Link className='mx-10 rounded-full bg-fuchsia-700 text-white uppercase p-3' to={`receta-detail/${e.url}`}> Ir a la receta</Link>
                    </div>

                ))
                ) : (<div></div>)
            }
     
    </div>
  )
}

export default Search