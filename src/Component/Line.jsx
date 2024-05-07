import React from 'react'

const Line = (props) => {
  return (
    <div className='firstline'>
      <p className='line'></p>
      <p className='prop'>{props.text}</p>
      <p className='line'></p>
    </div>
  )
}

export default Line
