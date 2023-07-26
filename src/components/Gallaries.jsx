import React from 'react'
import SinglePhoto from './SinglePhoto'
import gallery1 from '../assets/gallery1.jpg'
import gallery2 from '../assets/gallery2.jpg'
import gallery3 from '../assets/gallery3.jpg'
import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'

const items =[
    {
        id:1,
        image:gallery1,
    },
    {
        id:2,
        image:gallery2,
    },
    {
        id:3,
        image:gallery3,
    },
    {
        id:4,
        image:slide1,
    },
    {
        id:5,
        image:slide2,
    },
    {
        id:6,
        image:slide3,
    },
   
]


const Gallaries = () => {
  return (
    <div className='w-full min-h-[400px] my-20 flex flex-col items-center justify-center'>
        <h1 className='text-5xl mb-12 font-bold'>gallery</h1>
        <div className=" w-[95%] max-w-[1420px] flex flex-wrap items-center justify-center gap-6">

        {items.map((item)=> (

        <SinglePhoto item={item}/>
        ))}
        </div>
    </div>
  )
}

export default Gallaries