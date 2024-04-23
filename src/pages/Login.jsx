/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginGoogle from '../components/LoginGoogle';
import axios from 'axios';
function Login() {
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
    />
    {/* Same as */ }
    <ToastContainer />
    const url = "http://localhost/api/";
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const LoginCustomer = () =>{
        if(email == ""){
            toast.warning('🦄 Email is Null!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        else if(password == ""){
            toast.warning('🦄 Password is Null!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        else{
            axios({
                method: 'post',
                url: url+'loginStudent',
                data: {
                  email:email,
                  password:password
                }
              }).then((res)=>{
                if(res.data.check == true){
                    toast.success(res.data.msg +'🦄!', {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    localStorage.setItem('token',res.data.token);
                    window.location.replace("/");

                }
                else if(res.data.check == false){
                    if(res.data.msg.email){
                        toast.error(res.data.msg.email +'🦄!', {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    }
                    else if(res.data.msg.password){
                        toast.error(res.data.msg.password +'🦄!', {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    }
                    
                }
              })
        }
    }
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
                                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Your Email..." className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                </div>
                                <div className="mt-7">
                                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Your Password" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
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
                                    <button onClick={LoginCustomer} className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
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