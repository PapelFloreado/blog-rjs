import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const RecetaListContainer = () => {
    const {id} = useParams()

    console.log(id)
    useEffect(()=>{
        

    },[id])

    return(
        <>
            
        </>
    )

}

export default RecetaListContainer