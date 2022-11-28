import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import food from "../../assets/food.svg"
import { UserAuth } from '../../context/AuthContext'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

const NavBar = () => {

    const { user, logOut } = UserAuth()
    const navigate = useNavigate()
    const [nav, setNav] = useState(false)
    const handleNav = ()=>{
        setNav(!nav)
    }

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
                <nav className="flex container justify-between items-center h-40 max-w-[1240px] mx-auto px-4  text-fuchsia-700 bg-white">
                        <Link to="/">
                            <img className='mb-5' src={food} alt="logo" width={40} />
                        </Link>
                    <ul className='hidden font-bold text-white uppercase text-xl basis-1/2 md:flex md:items-center justify-end items-center'>
                        {
                            user?.displayName ? 
                            (<>
                                <Link to="/" className='py-4 px-4 border-b-orange-400 border-solid  rounded-full text-fuchsia-700 text-2xl hover:text-fuchsia-900 mx-4  transition-colors duration-300'>Home</Link>
                                <Link to="/postear" className='text-fuchsia-700 text-2xl py-4 px-4 mx-4 rounded-full hover:text-fuchsia-900  transition-colors duration-300'>Postear</Link><Link to="/categoria
                                " className='text-fuchsia-700 py-4 px-4 text-2xl  rounded-full hover:text-fuchsia-900 mx-4  transition-colors duration-300'>
                                    Categorias
                                </Link>
                                <button type="button" className=' border-black text-2xl text-fuchsia-700 py-4 px-4 mx-4 rounded-full hover:text-fuchsia-900  transition-colors duration-300 uppercase' onClick={handleLogOut}>Cerrar Sesión</button></>) 
                            : (
                            <>  
                                <Link to="/" className='py-4 px-4 text-fuchsia-700 text-2xl rounded-full hover:text-fuchsia-900 mx-4  transition-colors duration-300'>Home</Link>
                                <Link to="/categoria" className='text-fuchsia-700 py-4 px-4 text-2xl  rounded-full  hover:text-fuchsia-900 hover:border-b-fuchsia-700 mx-4  transition-colors duration-300'>
                                Categorias
                                </Link>

                                <Link type="button" className='text-fuchsia-700 text-2xl py-4 px-4  rounded-full hover:text-fuchsia-900  transition-colors duration-300 uppercase' to="/sigin">Iniciar Sesión</Link> 
                                
                            </>
                                ) 
                        }

                    </ul>
                    <div onClick={handleNav} className='block md:hidden'>
                        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
                    </div>
                    <ul className={nav? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-fuchsia-900 bg-white ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                        {
                            user?.displayName ? 
                            (<>
                                <li className='p-4 border-b border-fuchsia-600'>
                                <Link to="/">
                                    <img className='mb-5' src={food} alt="logo" width={40} />
                                </Link>
                                </li>
                                <li className='p-4 border-b border-fuchsia-600'>
                                <Link to="/" className='py-4 px-4 uppercase  rounded-full text-fuchsia-700 text-2xl hover:text-fuchsia-900 mx-4  transition-colors duration-300'>Home</Link>

                                </li>
                                <li className='p-4 border-b border-fuchsia-600'>
                                <Link to="/postear" className='text-fuchsia-700 uppercase text-2xl py-4 px-4 mx-4 rounded-full hover:text-fuchsia-900  transition-colors duration-300'>Postear</Link>
                                </li >  
                                <li className='p-4 border-b border-fuchsia-600'>
                                <Link to="/categoria
                                " className='text-fuchsia-700 py-4 px-4 text-2xl  uppercase rounded-full hover:text-fuchsia-900 mx-4  transition-colors duration-300'>
                                    Categorias
                                </Link>
                                </li>
                                <button type="button" className=' text-2xl text-fuchsia-700 py-4 px-8 mx-4 rounded-full hover:text-fuchsia-900  transition-colors duration-300 uppercase' onClick={handleLogOut}>Cerrar Sesión</button></>
                                
                                ) 
                            : (
                            <>  
                                <li className='p-4 border-b border-fuchsia-600'>
                                    <Link to="/">
                                        <img className='mb-5' src={food} alt="logo" width={40} />
                                    </Link>
                                </li>
                                <li className='p-4 border-b border-fuchsia-600'>
                                    <Link to="/" className='uppercase py-4 px-4 text-fuchsia-700 text-2xl rounded-full hover:text-fuchsia-900 mx-4  transition-colors duration-300'>Home</Link>
                                </li>
                                <li className='p-4 border-b border-fuchsia-600'>
                                    <Link to="/categoria" className='text-fuchsia-700 py-4 uppercase px-4 text-2xl  rounded-full  hover:text-fuchsia-900 hover:border-b-fuchsia-700 mx-4  transition-colors duration-300'>
                                    Categorias
                                    </Link>
                                </li>
                                <li className='py-2 px-8 border-b border-fuchsia-600'>
                                    <Link type="button" className='text-fuchsia-700 text-2xl py-4 px-4  rounded-full hover:text-fuchsia-900  transition-colors duration-300 uppercase' to="/sigin">Iniciar Sesión</Link> 
                                </li>

                                
                            </>
                                ) 
                        }

                    </ul>
                </nav>
            </div>
        </>
    )
}

export default NavBar