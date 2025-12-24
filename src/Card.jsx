import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-white h-92 rounded-2xl w-64  text-center flex flex-col items-center gap-0.5 p-4'>
<img src={props.img} alt=""   className="w-24 h-24 rounded-full object-cover" />
<h1 className='text-2xl font-semibold'>{props.name}</h1>
<h4 className='text-xl '> {props.post}</h4>
<p className=''>{props.title}</p>
<div className='flex gap-10 mt-3 text-white p-4'>
    <button className='px-6 py-2 rounded-2xl bg-blue-500 '>Follow</button>
   <button className='px-6 py-2 rounded-2xl bg-blue-500 '>Unfollow</button>
</div>
    </div>
  )
}

export default Card