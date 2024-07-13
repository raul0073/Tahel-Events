import React from 'react'
import tahellogo from "./../../../public/tahel.jpg";
import Image from "next/image";
function LogoImage() {
  return (
    <Image
    src={tahellogo}
    width={80}
    height={80}
    className="rounded-full"
    alt="logo"
/>
  )
}

export default LogoImage
