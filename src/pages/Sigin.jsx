import React, { useEffect } from 'react'
import {GoogleButton} from "react-google-button"
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Sigin = () => {

    const {googleSignIn, user} = UserAuth()
    const navigate = useNavigate()

    const handleSignIn = async ()=>{
        try {
            await googleSignIn()
            

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        if(user !== null){
            navigate("/postear")
        }
    },[user])

    return (
        <>
            <div className='container mx-auto text-center pt-16'>
            <h2 className='font-bold  text-fuchsia-700  text-2xl'>Para comenzar a postear debes loguearte</h2>
                <div className='flex-col  pt-20 justify-center'>
                    <p className='font-bold text-xl w-full'>Para protegernos y protegerte debes tener una cuenta válida</p>
                    <div className='flex justify-center pt-20'>
                        <GoogleButton onClick={handleSignIn}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sigin