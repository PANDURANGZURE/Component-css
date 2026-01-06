import React from 'react'
import { Button } from './Button'
import { Input } from './Input'
import { Navbar } from './Navbar'

function App() {
  let username = 'saurav'
  return (
    <>
    <Navbar
    brand='Saurav Zure'
    links={[
    { label: "Home", href: "/" },
    { label: "Docs", href: "/docs" },
    { label: "GitHub", href: "#" },
  ]}
  sticky
  varient="blur"
  textColor='red'
    />
    
    </>
  )
}

export default App