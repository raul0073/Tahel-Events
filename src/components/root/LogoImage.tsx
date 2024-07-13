import React from 'react'
import tahellogo from "./../../../public/tahel.jpg";
import Image from "next/image";
function LogoImage() {
  return (
    <Image
    src={tahellogo}
    width={120}
    height={120}
    className="rounded-full"
    alt="logo"
/>
  )
}

export default LogoImage
