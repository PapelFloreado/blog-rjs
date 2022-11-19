import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RecetaDetail from "../RecetaDetail/RecetaDetail"
import { collection, getDocs } from 'firebase/firestore'
import db from '../../services'

const RecetaListContainer = () => {
    const {id} = useParams()

    const [ item, setItem ] = useState({})

    useEffect(() => {
        const getColData = async () =>{
          try { 
            const data = collection(db, "recetas")
            const col = await getDocs(data)
            const res = col.docs.map((doc) =>doc={id:doc.id, ...doc.data()})
            const res2 = res.find(el=>el.id === id)
            setItem(res2)
            
          } catch (error) {
            console.log(error)
          }
         
        }
        getColData()
        return () => {
          
        }
      }, [id])
      
    
    
      return (
        <>
             <RecetaDetail item={item}/>
        </>
        
      )
    }

export default RecetaListContainer