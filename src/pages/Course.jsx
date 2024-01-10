/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Courses from '../components/Courses';
function Course() {
  return (
    <div>
        <Header/>
        <div className="grid grid-cols-4 gap-4">
        <Courses/>
        <Courses/>
        <Courses/>
        <Courses/>
        <Courses/>
        </div>
        <Footer/>
    </div>
  )
}

export default Course