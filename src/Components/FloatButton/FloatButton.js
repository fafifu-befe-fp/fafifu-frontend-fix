import React from 'react';
import { IoIosAdd } from 'react-icons/io';
import './float.css';

const FloatButton = () => {
  return (
    <div className='container'>
      <button type="button" className='float'><IoIosAdd className='m-1'/>Jual</button>
    </div>
  )
}

export default FloatButton