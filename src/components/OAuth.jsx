import React from 'react';
import { FcGoogle } from 'react-icons/fc';

export default function OAuth() {
  return (
    <button className='flex w-full bg-red-700 items-center justify-center text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-200 ease-in-out rounded'>
      <FcGoogle className='text-2xl bg-white rounded-full mr-2' />
          Continue with Google
      </button>
  )
}
