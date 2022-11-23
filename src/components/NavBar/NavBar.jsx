import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import food from "../../assets/food.svg"
import { UserAuth } from '../../context/AuthContext'



const NavBar = () => {

    const { user, logOut } = UserAuth()
    const navigate = useNavigate()

    const handleLogOut = async ()=>{
        try {
            await logOut()
            navigate("/")
            
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <div className='w-full shadow-xl'>
                <nav className="flex container mx-auto bg-white">
                    <div className='flex basis-1/2 sticky'>
                        <Link to="/">
                            <img className='mb-5' src={food} alt="logo" width={40} />
                        </Link>
                    </div>
                    <div className=' font-bold text-white uppercase text-xl basis-1/2 flex justify-end items-center'>
                        {
                            user?.displayName ? (<><Link to="/" className='bg-fuchsia-700 py-4 px-4  rounded-full hover:bg-fuchsia-900 mx-4  transition-colors duration-300'>Home</Link><Link to="/postear" className='bg-fuchsia-700 py-4 px-4 mx-4 rounded-full hover:bg-fuchsia-900  transition-colors duration-300'>Postear</Link><Link to="/categoria
                            " className='bg-fuchsia-700 py-4 px-4  rounded-full hover:bg-fuchsia-900 mx-4  transition-colors duration-300'>
                                Categorias
                            </Link><button type="button" className='bg-fuchsia-700 py-4 px-4 mx-4 rounded-full hover:bg-fuchsia-900  transition-colors duration-300 uppercase' onClick={handleLogOut}>Cerrar Sesión</button></>) : (<Link type="button" className='bg-fuchsia-700 py-4 px-4  rounded-full hover:bg-fuchsia-900  transition-colors duration-300 uppercase' to="/sigin">Iniciar Sesión</Link> ) 
                        }

                    </div>
                </nav>
            </div>
        </>
  )
}

export default NavBar