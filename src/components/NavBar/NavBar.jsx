import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import food from "../../assets/food.svg"
import { UserAuth } from '../../context/AuthContext'
import "./NavBar.css"


const NavBar = () => {

    const { user, logOut } = UserAuth()
    const navigate = useNavigate()

    const [navbar, setNavbar] = useState(false)
    
    const changeBackground = ()=>{
      if(window.scrollY >= 40){
        setNavbar(true)
      }else{
        setNavbar(false)
      }
    }

    window.addEventListener("scroll", changeBackground);
   

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
            <nav className={navbar ? "navbar active container mx-auto navbar  flex relative justify-end " : "navbar container mx-auto navbar  flex relative justify-end "} >
                <div className='flex basis-1/2 sticky'>
                    <Link to="/">
                        <img className='mb-5' src={food} alt="logo" width={40} />
                    </Link>
                </div>
                <div className=' font-bold text-white uppercase text-xl basis-1/2 flex justify-end items-center'>
                    {
                        user?.displayName ? (<><Link to="/" className='bg-fuchsia-700 py-4 px-4  rounded-full hover:bg-fuchsia-900 mx-4  transition-colors duration-300'>Home</Link><Link to="/postear" className='bg-fuchsia-700 py-4 px-4 mx-4 rounded-full hover:bg-fuchsia-900  transition-colors duration-300'>Postear</Link><button type="button" className='bg-fuchsia-700 py-4 px-4 mx-4 rounded-full hover:bg-fuchsia-900  transition-colors duration-300 uppercase' onClick={handleLogOut}>Cerrar Sesión</button></>) : (<Link type="button" className='bg-fuchsia-700 py-4 px-4  rounded-full hover:bg-fuchsia-900  transition-colors duration-300 uppercase' to="/sigin">Iniciar Sesión</Link> ) 
                    }
                </div>
            </nav>
        </>
  )
}

export default NavBar