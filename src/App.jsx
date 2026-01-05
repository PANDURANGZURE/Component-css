import React from 'react'
import { Button } from './Button'
import { Input } from './Input'

function App() {
  let username = 'saurav'
  return (
    <>
    <Input
  label="Username"
  placeholder="Enter your username"
  // value={}
  onChange={(e) => setUsername(e.target.value)}
  size="md"
  variant="default"
  // error={}
/>
<Input
  label="Email"
  placeholder="Enter your email"
  size="lg"
  variant="ghost"
/>

    </>
  )
}

export default App