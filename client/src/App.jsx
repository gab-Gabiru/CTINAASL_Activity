import React from 'react'
import Home from './Components/pages/Home'
import Header from './Components/navbar/Header'
import Footer from './Components/pages/Footer'
import Feature from './Components/pages/Feature'
import About from './Components/pages/About'
import Pricing from './Components/pages/Pricing'
import Contact from './Components/pages/Contact'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">
        <Home />
        <Feature />
        <About />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
