import React,{useEffect, useState} from 'react'
import { useParams} from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import db from '../../services/index.js'


const CategoriaContainer = () => {

    const [ items, setItems] = useState()

    const {categoria} = useParams()
  
  
    useEffect(() => {
        const getColData = async () =>{
          try { 
            const data = collection(db, "recetas")
            const col = await getDocs(data)
            const res = col.docs.map((doc) =>doc={id:doc.id, ...doc.data()})
            const res2 = categoria ? res.filter(el=> el.categoria === categoria) : res
            setItems(res2)
            
          } catch (error) {
            console.log(error)
          }
         
        }
        getColData()
        return () => {
          
        }
      }, [categoria])
      


  return (
    <div>CategoriaContainer</div>
  )
}

export default CategoriaContainer