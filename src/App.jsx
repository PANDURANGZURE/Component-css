import React from 'react'
import { Button } from './Button'
import { Input } from './Input'
import { Navbar } from './Navbar'
import { Textarea } from './Textarea'
import Testing from './page/Testing'

function App() {
  let username = 'saurav'
  return (
    <>
    <Textarea
  label="Feedback"
  variant="outline"
  color="purple"
/>
    <Testing/>

<Textarea
  label="Description"
  variant='ghost'
  size="lg"
  resize="none"
/>

<Textarea
  label="Error state"
  error
/>

    </>
  )
}

export default App