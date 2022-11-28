import React,{useEffect, useState} from 'react'
import { useParams} from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import db from '../../services/index.js'
import Spinner from '../Spinner/Spinner.jsx'
import Posteos from '../Posteos/Posteos.jsx'


const CategoriaContainer = () => {

    const [ recetas, setRecetas] = useState([])
    const [ loading, setLoading] = useState(false)

    const {categoria} = useParams()
  
  
    useEffect(() => {
        const getColData = async () =>{
          try { 
            setLoading(true)
            const data = collection(db, "recetas")
            const col = await getDocs(data)
            const res = col.docs.map((doc) =>doc={id:doc.id, ...doc.data()})
            const res2 = categoria ? res.filter(el=> el.categoria === categoria) : res
            setRecetas(res2)
            setLoading(false)
            
          } catch (error) {
            console.log(error)
          }
         
        }
        getColData()
        return () => {
          
        }
      }, [categoria])
      


  return (
    <>
        <h2 className='uppercase text-fuchsia-700 font-bold text-6xl mt-16 text-center'>Aqui están las recetas disponibles</h2>
      {

        recetas.length === 0 ? (<Spinner></Spinner>) : 
           (
            <div className=' lg:flex lg:flex-wrap'>
              <Posteos recetas={recetas}/>  
            </div>
         
            )
                                                

}
      
    </>
    
    
  )
}

export default CategoriaContainer