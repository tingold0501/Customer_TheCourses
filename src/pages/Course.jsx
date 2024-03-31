/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Category from '../components/Category';
import Banner from '../components/Banner';
import History from '../components/History';
import Recomend from '../components/Recomend';
function Course() {
  
  return (
    <div>
      <Header />
      <Banner />
      <History/>
      <Category />
      <Recomend />
      
    
      <Footer />
    </div>
  )
}

export default Course