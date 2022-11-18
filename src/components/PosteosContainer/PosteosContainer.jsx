import React, { useEffect, useState } from 'react'
import {collection, getDocs} from "firebase/firestore"
import db from "../../services/index.js"
import Posteos from '../Posteos/Posteos.jsx'

const PosteosContainer = () => {

    const [ recetas, setRecetas ] = useState([]) 

    useEffect(()=>{
        const getColData = async ()=>{

            try {
                const data = collection(db, "recetas")
                const col = await getDocs(data)
                const res = col.docs.map((doc) =>doc={id:doc.id, ...doc.data()})
                setRecetas(res)
            } catch (error) {
                console.log(error)
            }
            
        }

        getColData()

    },[])



    return (
        <>
            <div className='flex'>
                <div className='flex'>
                    <Posteos recetas={recetas}/>  
                </div>
            </div>
        </>
    )
}

export default PosteosContainer