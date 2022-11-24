import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import PosteosContainer from '../components/PosteosContainer/PosteosContainer'
import Search from '../components/Search/Search'


const Home = () => {

    return (
        <>
            <h1 className='container text-center mt-16  mx-auto text-fuchsia-700 uppercase font-bold text-8xl'>Bienvenido a <span className='text-black'>Food</span></h1>
            <h2 className='text-center uppercase font-bold mt-10 text-4xl'>Tu plataforma de Recetas</h2>
            <Carousel></Carousel> 
            {/* <Search></Search> */}
            <h1 className='text-center text-4xl mt-14 uppercase font-bold text-fuchsia-700'>Aqui hay algunas recetas que te pueden servir</h1>
            <div className='pt-10 flex container text-center mx-auto justify-between '>
                <PosteosContainer className="w-full"></PosteosContainer>
            </div>
        </>
        
  )
}

export default Home