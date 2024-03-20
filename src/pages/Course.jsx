/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Courses from '../components/Courses';
import Category from '../components/Category';
import Banner from '../components/Banner';
import EmtyCourse from '../../public/emtythecourse.jpg'
import History from '../components/History';
function Course() {
  const url = "http://localhost/api/";
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch(url + "getAllDataCourse")
      .then((res) => res.json())
      .then((res) => {
        setCourses(res);
        console.log(res);
      });
  }, []);
  return (
    <div>
      <Header />
      <Banner />
      <History/>
      <Category />
      {/* <section className="container mx-auto px-8 py-8 lg:py-40">
        <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 !text-3xl !leading-snug lg:!text-4xl">Latest Achievements</h2>
        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mt-2 w-full font-normal !text-gray-500 lg:w-5/12">Read about our latest achievements and milestones.</p>
        <a href="https://www.material-tailwind.com/" target="_blank">Generated with <b>Magic AI Blocks</b> by Creative Tim</a>.
        <div className='w-full grid grid-cols-4 flex-col '>
          {courses.length > 0 &&
            courses.map((item) => (
              <div className="mt-10 mr-6 cursor-pointer hover:translate-x-3 ">
                <div className="  flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"><img src={item.image} alt="bg" className="absolute inset-0 h-full w-full object-cover object-center" />
                  <div className="absolute inset-0 bg-black/70"></div>
                  <div className="p-6 relative flex flex-col justify-end">
                    <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white"> {item.name}</h4>
                    <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 font-normal">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {courses.length == 1 && (
          <img className='w-full ' src={EmtyCourse} alt="" srcset="" />
        )}
      </section> */}
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