import React from 'react'
import tahellogo from "./../../../public/tahel.jpg";
import Image from "next/image";
function LogoImage({cssClass} : {cssClass: string}) {
  return (
    <Image
    src={tahellogo}
    width={80}
    height={80}
    className={cssClass}
    alt="logo"
    />
  )
}

export default LogoImage
