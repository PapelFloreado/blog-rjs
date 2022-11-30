import React from 'react'
import PosteosContainer from '../components/PosteosContainer/PosteosContainer'
/* import Search from "../components/Search/Search" */




const Home = () => {

    return (
        <>
            <div className='grid grid-flow-row-dense grid-cols-2 bg-hero-home rounded-2xl  h-screen'>
                <div className=' grid bg-opacity-70 bg-stone-100'>
                    <div className='grid place-items-end'>
                        <h1 className='text-center  container text-4xl  mx-auto text-fuchsia-700 uppercase font-bold lg:text-8xl'>Bienvenido a <span className='text-black'>Food</span></h1>
                    </div>
                    <div className='grid place-items-start'>
                        <h2 className='text-center mx-auto uppercase font-bold text-2xl lg:text-4xl'>Tu plataforma de Recetas</h2>
                    </div>
                </div>
            </div>
            {/* <Search></Search> */}
            <h1 className=' xl:border-black text-center text-4xl xl:text-6xl mt-20 uppercase font-bold text-fuchsia-700'>Top 10 <span className='text-black'> Recetas </span></h1>
            <div className=' lg:flex lg:flex-wrap'>
                <PosteosContainer></PosteosContainer>
            </div>
        </>
        
  )
}

export default Home