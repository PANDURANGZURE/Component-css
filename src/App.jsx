import React from 'react'
import { useState } from "react";
import { Button } from './Button'
import { Input } from './Input'
import { Navbar } from './Navbar'
import { Textarea } from './Textarea'
import Testing from './page/Testing'
import { Select } from './Select'
import { Checkbox } from './Checkbox';

function App() {
   const [country, setCountry] = useState("");
   const [checked, setChecked] = useState(false);
  return (
    <>
    <Checkbox
  label="Accept Terms"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  variant="outline"
  size="md"
  color="#2563eb"
/>;
    <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} label="Default" />
<Checkbox label="Outline" variant="outline" />
<Checkbox label="Solid" variant="solid" />


    </>
  )
}

export default App