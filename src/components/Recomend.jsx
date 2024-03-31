import React, { useEffect, useState } from 'react';
import RecomendItem from './RecomendItem';
import { Image } from '@mui/icons-material';
import EmtyCourse from '../../public/emtyCourse.jpg';
function Recomend({ children }) {
    const url = "http://localhost/api/";
    const [courses, setCourses] = useState([]);

    const getCourse = async () => {
        const res = await fetch(url + "getAllCourse");
        const data = await res.json();
        setCourses(data);
        console.log(data);
    }
    useEffect(() => {
        fetch(url + "getLatestCourses")
            .then((res) => res.json())
            .then((res) => {
                setCourses(res);
                console.log(res);
            });
    }, []);
    return (
        <div className='bg-[#E0EDFB]'>
            <div className='flex justify-between items-center mt-10  '>
                <h1 className='ml-[6%] mt-[5%] font-semibold text-[36px] text-[#252641]'>Welcome back, ready for your next lesson?</h1>
                <h4 onClick={getCourse} className='mr-[6%] cursor-pointer mt-[5%] font-bold text-[#49BBBD]'>See all</h4>
            </div>
            <div className="min-h-screen bg-[#E0EDFB] flex justify-center items-center ">
                <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 space-y-4 md:space-y-0">
                    {courses.length > 0 &&
                        courses.map((item) => (
                            <RecomendItem key={item.id} name={item.name} image={item.image} discount={item.discount} />
                    ))}
                    {
                        courses.length == 0 &&(
                            <Image src="../public/emtyCourse.jpg" alt="EmtyCourse" />
                        )
                    }
                </div>
            </div>
            
        </div>

    );
}
export default Recomend;



{/* <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                        <h3 className="mb-3 text-xl font-bold text-[#49BBBD]">Beginner Friendly</h3>
                        <div className="relative">
                            <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Colors" />
                            <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p>
                        </div>
                        <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">Javascript Bootcamp for Absolute Beginners</h1>
                        <div className="my-4">
                            <div className="flex space-x-1 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#49BBBD] mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                                <p>1:34:23 Minutes</p>
                            </div>
                            <div className="flex space-x-1 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#49BBBD] mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <p>3 Parts</p>
                            </div>
                            <div className="flex space-x-1 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#49BBBD] mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </span>
                                <p>Vanilla JS</p>
                            </div>
                            <button className="mt-4 text-xl w-full text-white bg-[#49BBBD] py-2 rounded-xl shadow-lg">Buy Lesson</button>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                        <h3 className="mb-3 text-xl font-bold text-[#49BBBD]">Intermediate</h3>
                        <div className="relative">
                            <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt="Colors" />
                            <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">$12</p>
                            <p className="absolute top-0 right-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-tr-lg rounded-bl-lg">%20 Discount</p>
                        </div>
                        <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">Write a Gatsby plugin using Typescript</h1>
                        <div className="my-4">
                            <div className="flex space-x-1 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#49BBBD] mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                                <p>1:34:23 Minutes</p>
                            </div>
                            <div className="flex space-x-1 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#49BBBD] mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <p>3 Parts</p>
                            </div>
                            <div className="flex space-x-1 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#49BBBD] mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </span>
                                <p>TypeScript</p>
                            </div>
                            <button className="mt-4 text-xl w-full text-white bg-[#49BBBD] py-2 rounded-xl shadow-lg">Start Watching Now</button>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                        <h3 className="mb-3 text-xl font-bold text-[#49BBBD]">Beginner Friendly</h3>
                        <div className="relative">
                            <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1561835491-ed2567d96913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt="Colors" />
                            <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">$50</p>
                        </div>
                        <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">Advanced React Native for Sustainability</h1>
                        <div className="my-4">
                            <div className="flex space-x-1 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#49BBBD] mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                                <p>1:34:23 Minutes</p>
                            </div>
                            <div className="flex space-x-1 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#49BBBD] mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <p>3 Parts</p>
                            </div>
                            <div className="flex space-x-1 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#49BBBD] mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </span>
                                <p>Vanilla JS</p>
                            </div>
                            <button className="mt-4 text-xl w-full text-white bg-[#49BBBD] py-2 rounded-xl shadow-lg">Buy Lesson</button>
                        </div>
                    </div> */}