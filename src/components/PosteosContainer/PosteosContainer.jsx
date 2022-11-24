import React, { useEffect, useState } from 'react'
import {collection, getDocs, limit, orderBy, query, startAt} from "firebase/firestore"
import db from "../../services/index.js"
import Posteos from '../Posteos/Posteos.jsx'
import Spinner from '../Spinner/Spinner.jsx'

const PosteosContainer = () => {

    const [ recetas, setRecetas ] = useState([])

    const [ loading, setLoading ] = useState(false)

    useEffect(()=>{
        const getColData = async ()=>{

            try {
                setLoading(true)
                const data = collection(db, "recetas")
                const q = query(data, orderBy("puntaje", "desc"), limit(10))
                const col = await getDocs(q)
                const res = col.docs.map((doc) =>doc={id:doc.id, ...doc.data()}, limit(10))

                setRecetas(res)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
            
        }

        getColData()

    },[])



    return (
        <>
            {

                recetas.length === 0 ? (<Spinner></Spinner>) : 
                (<div className='flex'>
                    <div className='flex'>
                        <Posteos recetas={recetas}/>  
                    </div>
                </div>)
                                                                

            }

        </>
    )
}

export default PosteosContainer