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
import { Badge, BadgeDot, BadgePill } from "./Badge";

export default function App() {
  return (
    <>
    <Button variant="primary">Primary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="primary" loading>Loading State</Button>
    <Button variant="primary" disabled>Disabled</Button>
    </>
  );
}