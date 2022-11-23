import React, { useState } from 'react'
import slider1 from "../../assets/img/img1.jpg"
import slider2 from "../../assets/img/img2.jpg"
import slider3 from "../../assets/img/img3.jpg"
import slider4 from "../../assets/img/img4.jpg"
import LeftArrow from '../LeftArrow/LeftArrow'
import RigthArrow from '../RigthArrow/RigthArrow'

const Carousel = () => {
    
    const [ slider, setSlider ] = useState(0)

    const imgCarousel = [slider1, slider2, slider3, slider4]
    
    const length = imgCarousel.length 

    const handleSlidePrev = ()=>{
        setSlider( slider === length - 1 ? 0 : slider + 1 )
    }

    const handleSlideNext = ()=>{
        setSlider( slider === 0 ? length - 1 : slider - 1)
    }

  return (
    <>
        <div className='max-w-[1240px] container mx-auto px-4 py-16  flex justify-center items-center '>
            <button onClick={handleSlidePrev}>
                <LeftArrow className="absolute top-[50%] text-3xl text-white cursor-pointer right-8"/>
            </button>
            {
                imgCarousel.map((item, index)=>(
                    <div className={index === slider  ? "opacity-100 ease-in-out duration-500" : "opacity-0 ease-in-out duration-500"} key={index}>
                        {
                            index === slider && (<img className=' w-full rounded-2xl ease-in-out  transition-opacity duration-500' src={item} alt="/" />)
                        }
                    </div>
                ))
            }
            <button onClick={handleSlideNext}>
                <RigthArrow className="absolute top-[50%] text-3xl text-white cursor-pointer left-8"/>
            </button>
        </div>   
    </>
  )
}

export default Carousel