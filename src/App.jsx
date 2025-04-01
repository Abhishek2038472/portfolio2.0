import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Home from './components/custom/Home'
import Header from './components/custom/Header'
import Skills from './components/custom/Skills'
import Footer from "./components/custom/Footer"






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className='bg-bannerImg bg-no-repeat bg-cover w-full h-full brightness-100  saturate-100'>
    <Header/>
    <Home/>
    <Skills/> 
    <Footer/>
    </section>
    
    
    </>
  )
  
}

export default App
