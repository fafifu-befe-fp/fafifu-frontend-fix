import React, { useState } from 'react';
import Slider from '../../Components/Slider/Slider'
import Category from '../../Components/Categories/Categories';
import FloatButton from '../../Components/FloatButton/FloatButton';
import Navbar from '../../Components/Navbar/Navbar';

const Home = () => {
  return (
    <>
      <Slider />
      <Category />
      <FloatButton />
    </>
  )
}

export default Home