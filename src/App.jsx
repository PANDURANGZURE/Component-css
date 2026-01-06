import React from 'react'
import { Button } from './Button'
import { Input } from './Input'

function App() {
  let username = 'saurav'
  return (
    <>
    <Input label="Email" color="#0ea5e9" />
<Input label="Username" color="purple" variant="outline" />
<Input label="Search" color="hsl(142 76% 36%)" />
<Input label="Password" color="red" error />

    </>
  )
}

export default App