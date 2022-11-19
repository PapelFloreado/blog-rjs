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
            <div className='p-64 container mx-auto text-center pt-16'>
            <h2 className='font-bold  text-fuchsia-700  text-6xl'>Para comenzar a postear debes loguearte</h2>
                <div className='flex-col  bg-stone-100 rounded-xl py-44  mt-24 pt-20 justify-center'>
                    <p className='font-bold text-3xl w-full'>Para protegernos y protegerte debes tener una cuenta válida</p>
                    <p className='font-bold text-2xl pt-10 w-full'>No temas tus datos están protegidos</p>
                    <div className='flex justify-center pt-20'>
                        <GoogleButton onClick={handleSignIn}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sigin