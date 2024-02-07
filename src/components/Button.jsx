import React from 'react';


const Button = ({ text }) => {
  return (
    <h1 className='text-white font-medium rounded-3xl w-2/5 min-w-96 bg-buttonColor py-3 px-4 text-center cursor-pointer'>{text}</h1>
  )
}


export default Button;