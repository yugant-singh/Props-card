import React from 'react'
import Navbar from './components/Navbar'
import Card from './Card'

const App = () => {
  return (
    <>
    <div className='flex items-start  gap-10 h-screen w-screen p-4 bg-black'>
    <Card name="Ankit Singh" post="Devops Engineer" title="A good combo of Hardwork and Smartwork" img="https://images.unsplash.com/photo-1766469284258-11bf4223e2af?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
     
    </div>
    
    </>
  )
}

export default App