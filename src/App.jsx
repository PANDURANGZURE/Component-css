import React from 'react'
import { Button } from './Button'
import { Input } from './Input'

function App() {
  return (
    <>
    <Input/>
    <Input placeholder="Default Input" type="password" />
    <Input placeholder="Outline Input"variant="outline" />
    <Input placeholder="Disabled Input"disabled />
    <Input placeholder="Error Input"error />
    <Input placeholder="Large Input"size="lg" />
    </>
  )
}

export default App