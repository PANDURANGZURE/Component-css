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
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
      <h2>Basic Badges</h2>
      <Badge color="red">Error</Badge>
      <Badge color="green">Success</Badge>
      <Badge color="blue">Info</Badge>

      <h2>Dot Badge</h2>
      <div className="relative">
        <button style={{ padding: "8px 16px" }}>Messages</button>
        <BadgeDot size={10} color="red" style={{ position: "absolute", top: 0, right: 0 }} />
      </div>

      <h2>Pill Badges</h2>
      <BadgePill color="green">Active</BadgePill>
      <BadgePill color="red">Inactive</BadgePill>
      <BadgePill color="yellow">Pending</BadgePill>
    </div>
  );
}