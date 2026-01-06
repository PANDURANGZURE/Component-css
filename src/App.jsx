import React from 'react'
import { useState } from "react";
import { Button } from './Button'
import { Input } from './Input'
import { Navbar } from './Navbar'
import { Textarea } from './Textarea'
import Testing from './page/Testing'
import { Select } from './Select'

function App() {
   const [country, setCountry] = useState("");
  return (
    <>
     <p>Selected: {country}</p>
    <Select
  label="Country"
  value={country}
  onChange={(e) => setCountry(e.target.value)}
  options={[
    { label: "India", value: "in" },
    { label: "USA", value: "us" },
  ]}
  placeholder="Select country"
  variant="outline"    // default | outline | ghost
  size="md"            // sm | md | lg
  color="#000000ff"
  error={false}
  disabled={false}
/>

    </>
  )
}

export default App