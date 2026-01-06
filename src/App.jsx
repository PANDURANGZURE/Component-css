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
import { Loader } from './Loaders';
import { Skeleton, SkeletonCard, SkeletonText, SkeletonTable } from "./Skeleton";

function App() {
  return (
    <>
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "20px" }}>
      <h2>Basic Skeleton</h2>
      <Skeleton width="200px" height="20px" />

      <h2>Text Skeleton</h2>
      <SkeletonText lines={4} />

      <h2>Card Skeleton</h2>
      <SkeletonCard />

      <h2>Table Skeleton</h2>
      <SkeletonTable rows={4} cols={3} />
    </div>
    </>
  );
}

export default App;