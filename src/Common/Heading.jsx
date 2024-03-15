import React from "react"

export const Heading = ({ title }) => {
  return (
    <>
      <h2 className='Pheading' data-aos='zoom-in-down'>
        {title}
      </h2>
    </>
  )
}