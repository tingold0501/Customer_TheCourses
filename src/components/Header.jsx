/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import IGG from '../assets/images/company/google.svg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
    const token = localStorage.getItem('token');
    const userInfor = JSON.parse(localStorage.getItem("userInfor"));
    const [open, setOpen] = useState(false);
    const logout = () => {
        if (localStorage.getItem('token')) {
            localStorage.removeItem('token');
            window.location.replace('/');
        }
    }

    return (
        <div className="w-full text-gray-700 bg-cream">
            <div className="flex flex-col max-w-screen-xl px-8 mx-auto md:items-center md:justify-between md:flex-row">
                <div className="flex flex-row items-center justify-between py-6">
                    <div className="relative md:mt-8">
                        <a href="#" className="text-lg relative z-50 font-bold tracking-widest text-gray-900 rounded-lg focus:outline-none focus:shadow-outline">T-Academy</a>
                        <svg className="h-11 z-40 absolute -top-2 -left-3" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.2574 2.24264C37.6005 -0.100501 41.3995 -0.100505 43.7426 2.24264L76.7574 35.2574C79.1005 37.6005 79.1005 41.3995 76.7574 43.7426L43.7426 76.7574C41.3995 79.1005 37.6005 79.1005 35.2574 76.7574L2.24264 43.7426C-0.100501 41.3995 -0.100505 37.6005 2.24264 35.2574L35.2574 2.24264Z" fill="#65DAFF" />
                        </svg>
                    </div>
                    <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline" onClick={() => setOpen(!open)}>
                        <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                            {open ? (
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            ) : (
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            )}
                        </svg>
                    </button>
                </div>
                <nav className={`md:h-auto flex flex-col flex-grow md:items-center pb-4 md:pb-0 md:flex md:justify-end md:flex-row origin-top duration-300 scale-y-0 ${open ? '' : 'transform md:transform-none'} ${open ? 'h-full' : ''}`}>
                    <Link to='/' className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline">
                        <a href="#">Home</a>
                    </Link>
                    <Link to='/course' className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline">
                        <a href="#">Course</a>
                    </Link >
                    <Link to='/blog' className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline">
                        <a href="#">Blog</a>
                    </Link>
                    <Link to='/contact' className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline">
                        <a href="#">Contact</a>
                    </Link>
                    <a className="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline" href="#">About Us</a>
                    {token ? (
                        <span className='flex'>
                            <a onClick={logout} className="px-10 py-3 mb-4 text-sm text-center bg-yellow-500 text-white rounded-full md:mt-8 md:ml-4" href="#">Log out</a>
                            <a className="text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 hover:text-gray-900 focus:outline-none focus:shadow-outline" href="#">
                                {userInfor && userInfor.avatar && (
                                    <img className='w-10 h-10 rounded-full' src={userInfor.avatar} alt="" />
                                )}
                            </a>
                        </span>
                    ) : (
                        <div className='mt-8' >
                            <Link to='/login' className="px-10 py-3  mb-4 text-sm text-center bg-white text-gray-800 rounded-full md:mt-8 md:ml-4">
                                <a >Login</a>
                            </Link>
                            <Link to='/register' className="px-10 py-3 mb-4 text-sm text-center bg-yellow-500 text-white rounded-full md:mt-8 md:ml-4">
                                <a href="#">Sign Up</a>
                            </Link>
                        </div>
                    )}
                </nav>

            </div>
        </div>
    )
}

export default Header