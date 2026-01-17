import React from 'react'
import { useState , useEffect } from "react";
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
import { Link } from "react-router-dom";

export default function App() {

  const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];
  return (
    <>
      <Testing/>
    </>
  );
}
