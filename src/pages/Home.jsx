import React from 'react'
import PosteosContainer from '../components/PosteosContainer/PosteosContainer'


const Home = () => {

    return (
        <>
            <h1 className='container text-center mx-auto uppercase font-bold text-2xl'> Tu plataforma</h1>
            <div className='pt-10 flex container text-center mx-auto justify-between '>
                <PosteosContainer className="basis-1/2"></PosteosContainer>
                <h2 className='basis-1/2'>Aca van los ultimos posteos</h2>
            </div>
        </>
        
  )
}

export default Home