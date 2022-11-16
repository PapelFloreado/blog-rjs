import React, { useEffect, useState } from 'react'
import {collection, getDocs} from "firebase/firestore"
import db from "../../services/index.js"
import Posteos from '../Posteos/Posteos.jsx'

const PosteosContainer = () => {

    const [ posteos, setPosteos ] = useState([]) 

    useEffect(()=>{
        const getColData = async ()=>{

            try {
                const data = collection(db, "Posteos")
                const col = await getDocs(data)
                const res = col.docs.map((doc) =>doc={id:doc.id, ...doc.data()})
                setPosteos(res)
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
                    <Posteos posteos={posteos}/>  
                </div>
            </div>
        </>
    )
}

export default PosteosContainer