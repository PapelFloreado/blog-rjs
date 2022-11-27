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
            <div className='lg:p-64 p-8 container w-full mx-auto text-center pt-16'>
            <h2 className='font-bold  text-fuchsia-700 uppercase text-3xl lg:text-6xl'>Para comenzar a postear debes <span className='text-black'>loguearte</span></h2>
                <div className='flex-col  bg-stone-100 shadow-slate-600 rounded-xl shadow-2xl py-44  mt-24 pt-20 justify-center'>
                    <p className='font-bold text-xl lg:text-3xl w-full'>Para protegernos y protegerte debes tener una cuenta válida</p>
                    <p className='font-bold text-lg lg:text-2xl pt-10 w-full'>No temas tus datos están protegidos</p>
                    <div className='flex justify-center pt-20'>
                        <GoogleButton onClick={handleSignIn}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sigin