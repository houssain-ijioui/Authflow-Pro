import React from 'react';


const InputField = ({ placeholderText }) => {
  return (
    <input className='border border-solid border-gray-500 w-2/5 min-w-96 rounded-md py-3 px-4 text-lg mb-4' type="text" placeholder={placeholderText} />
  )
}

export default InputField