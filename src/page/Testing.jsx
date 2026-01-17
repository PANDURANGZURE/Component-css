import React from 'react'
import { Textarea } from '../Textarea'
import './Testing.css'
import { Navbar } from '../Navbar'

function Testing() {
  const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];
  return (
    <>
     <div style={{width:'100%'}}>
      <Navbar
            brand="Zure UI"
            links={navLinks}
            sticky={true}
            variant="solid"   // or "transparent"
            textColor="#cf2e2e"
          />
     </div>
    
          <main style={{ padding: "2rem" }}>
            <h1>Welcome to Zure UI</h1>
            <p>This is the main content.</p>
          </main>
          
    </>
  )
}

export default Testing