import React from 'react'


const SinglePhoto = ({item}) => {
  return (
    <div className='w-screen md:w-[350px] h-[350px]'>
        <img src={item.image} alt={item.image} className='w-full h-full object-cover block rounded-md' />
    </div>
  )
}

export default SinglePhoto