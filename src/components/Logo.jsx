import React from 'react'

export const Logo = () => {
  return (
    <div style={{
        position: "absolute",
        top: 350,
        left: 620,
        zIndex: 2,
        color: "black",
        opacity: 0.4
      }}>
        <img className='w-24' src='./maticLogoBlack.png'></img>
      </div>
  )
}

