import React from 'react'
import logo from './../../asset/image/home/Logo.png'

const LogoImg = (props: any) => {
  return (
    <img src={logo} alt="logo" style={{ width: props?.width }} />
  )
}

export default LogoImg