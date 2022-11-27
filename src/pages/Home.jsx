import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import PosteosContainer from '../components/PosteosContainer/PosteosContainer'



const Home = () => {

    return (
        <>
            <h1 className='container text-center mt-10 sm:mt-10 md:mt-14 lg:mt-16 sm:text-6xl md:text-6xl  mx-auto text-fuchsia-700 uppercase font-bold lg:text-8xl'>Bienvenido a <span className='text-black'>Food</span></h1>
            <h2 className='text-center uppercase font-bold mt-10 sm:text-2xl md:text-3xl lg:text-4xl'>Tu plataforma de Recetas</h2>
            <Carousel className="lg:w-full sm:w-1/2"></Carousel> 
            {/* <Search></Search> */}
            <h1 className='text-center sm:text-2xl lg:text-4xl mt-14 uppercase font-bold text-fuchsia-700'>Top 10 <span className='text-black'> Recetas </span></h1>
            <div className='pt-10 flex container text-center mx-auto justify-between '>
                <PosteosContainer className="w-full"></PosteosContainer>
            </div>
        </>
        
  )
}

export default Home