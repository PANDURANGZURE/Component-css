import React from 'react'
import { Button } from './Button'
import { Input } from './Input'

function App() {
  let username = 'saurav'
  return (
    <>
    <Input
    label='saurav 2'
    variant='outline'
    />
    <Input
    label='saurav 2'
    variant='default'
    />
    <Input
    label='saurav 2'
    variant='ghost'
    />
    <Input
    label='saurav 2'
    variant='danger'
    />
    </>
  )
}

export default App