/* eslint-disable no-unused-vars */
import React from 'react';
import LoginGoogle from '../components/LoginGoogle';
function Login() {
    
    return (
        <div>
            {/* component */}
            {/* This is an example component */}
            <div className="font-sans">
                <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
                    <div className="relative sm:max-w-sm w-full">
                        <div className="card bg-[#F48C06] shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
                        <div className="card bg-[#23BDEE] shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
                        <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                            <label htmlFor className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                                Login
                            </label>
                            <form method="#" action="#" className="mt-10">
                                <div>
                                    <input type="email" placeholder="Enter Your Email..." className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                </div>
                                <div className="mt-7">
                                    <input type="password" placeholder="Enter Your Password" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                </div>
                                <div className="mt-7 flex">
                                    <label htmlFor="remember_me" className="inline-flex items-center w-full cursor-pointer">
                                        <input id="remember_me" type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="remember" />
                                        <span className="ml-2 text-sm text-gray-600">
                                            Remember
                                        </span>
                                    </label>
                                </div>
                                <div className="mt-7">
                                    <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                        Login
                                    </button>
                                </div>
                                <div className="flex mt-7 items-center text-center">
                                    <hr className="border-gray-300 border-1 w-full rounded-md" />
                                    <label className="block font-medium text-sm text-gray-600 w-full">
                                        Login With
                                    </label>
                                    <hr className="border-gray-300 border-1 w-full rounded-md" />
                                </div>
                                <div className="flex mt-7 justify-center w-full">
                                    <LoginGoogle/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login