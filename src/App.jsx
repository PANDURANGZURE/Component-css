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
import { Modal } from './Modal';
import { Toast, toast } from "./Toast";

function App() {
  return (
    <>
      <Toast varient="" />

      <button onClick={() => toast("Hello Toast")}>
        Show Toast
      </button>
    </>
  );
}

export default App;