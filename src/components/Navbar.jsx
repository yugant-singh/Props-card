import React from 'react'

const Navbar = (props) => {
    console.log(props);
    return (
        
        
        <div className='bg-gray-500 p-6 flex items-center justify-between text-white mb-1'>
            <h2 className='text-3xl'>{props.title}</h2>
            <div className=' flex px-2 item-center justify-between gap-10 text-white text-2xl'>
                <h4>Home</h4>
                <h4>Product </h4>
                <h4>Service</h4>
            </div>
        </div>
    )
}

export default Navbar