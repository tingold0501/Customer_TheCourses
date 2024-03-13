/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Courses from '../components/Courses';
import Category from '../components/Category';
import Banner from '../components/Banner';
function Course() {
  return (
    <div>
      <Header />
      <Banner/>
     
      <Category/>
      <div className="grid grid-cols-4 gap-4 ml-[5%]">
        <Courses />
      </div>
      <div className="flex flex-col items-center mt-12 text-center">
      <span className="relative inline-flex w-full md:w-auto">
        <a
          href="#_"
          className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
        >
          Show All
        </a>
      
      </span>
    </div>
      <Footer />
    </div>
  )
}

export default Course