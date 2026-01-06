import React from 'react'
import { useState } from "react";
import { Button } from './Button'
import { Input } from './Input'
import { Navbar } from './Navbar'
import { Textarea } from './Textarea'
import Testing from './page/Testing'
import { Select } from './Select'
import { Checkbox } from './Checkbox';
import { Switch } from './Switch';

function App() {
   const [country, setCountry] = useState("");
   const [checked, setChecked] = useState(false);
   const [enabled, setEnabled] = useState(false);
  return (
    <>
    <Switch
  label="Notifications"
  checked={enabled}
  onChange={(e) => setEnabled(e.target.checked)}
  size="md"
  variant="solid"
  color="#eb8f25ff"
/>
<Switch
  label="Notifications"
  checked={enabled}
  onChange={(e) => setEnabled(e.target.checked)}
  size="md"
  variant="default"
  color="#eb8f25ff"
/>
<Switch
  label="Notifications"
  checked={enabled}
  onChange={(e) => setEnabled(e.target.checked)}
  size="md"
  variant="outline"
  color="#141312ff"
/>
    </>
  )
}

export default App