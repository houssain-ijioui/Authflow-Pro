import React from 'react';
import { FcGoogle } from "react-icons/fc";


const GoogleBtn = ({ text }) => {
  return (
    <div className='bg-lightGrey flex flex-row w-2/5 min-w-96 rounded-md py-3 px-4 cursor-pointer'>
        <FcGoogle style={{ width: '30px', height: '30px' }} />
        <h1 className='m-auto text-middleBlue font-medium'>{text}</h1>
    </div>
  )
}

export default GoogleBtn;
