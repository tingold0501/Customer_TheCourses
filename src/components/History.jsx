import React from 'react';
import IHistory from '../../public/Rectangle 32.png';
import IUser from '../../public/image 12.png';
import Progress from './Progress';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
function History() {
    return (
        <div className='bg-[#E0EDFB] '>
            <div className='flex justify-between items-center mb-10 '>
                <h1 className='ml-[6%] font-semibold text-[36px] text-[#252641]'>Welcome back, ready for your next lesson?</h1>
                <h4 className='mr-[6%] font-bold text-[#49BBBD]'>View hisotry</h4>
            </div>
            <div className="grid grid-cols-3 items-center justify-center ml-[6%] ">
                <div className="w-[80%] cursor-pointer">
                    <div className=" rounded overflow-hidden ">
                        <div className="h-48 ">
                            <img className='w-[100%] h-[100%]' src={IHistory} alt="" srcset="" />
                        </div>
                        <div className="px-6 py-4">
                            <div className="h-6  mb-2">
                                <h4 className='font-semibold text-2xl '>AWS Certified Solutions Architect</h4>
                            </div>
                            <div className="h-4 mt-10 flex items-center ">
                                <img className='w-[42px] h-[42px] bg-cover bg-slate-400 rounded-full ' src={IUser} alt="" srcset="" />
                                <h5 className='ml-[5%]'>Lina</h5>
                            </div>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <div className="h-2 bg-gray-300  w-full rounded-full">
                                <div className="h-2  bg-[#49BBBD] w-1/4 mb-2 rounded-full">

                                </div>
                            </div>
                        </div>
                        <div className="px-6 pt-4 pb-2 text-right font-semibold">
                            <h4>Lession <span>5</span> of <span>7</span></h4>
                        </div>
                    </div>
                </div>
                <div className="w-[80%] cursor-pointer">
                    <div className=" rounded overflow-hidden ">
                        <div className="h-48 ">
                            <img className='w-[100%] h-[100%]' src={IHistory} alt="" srcset="" />
                        </div>
                        <div className="px-6 py-4">
                            <div className="h-6  mb-2">
                                <h4 className='font-semibold text-2xl '>AWS Certified Solutions Architect</h4>
                            </div>
                            <div className="h-4 mt-10 flex items-center ">
                                <img className='w-[42px] h-[42px] bg-cover bg-slate-400 rounded-full ' src={IUser} alt="" srcset="" />
                                <h5 className='ml-[5%]'>Lina</h5>
                            </div>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <div className="h-2 bg-gray-300  w-full rounded-full">
                                <div className="h-2  bg-[#49BBBD] w-1/4 mb-2 rounded-full">

                                </div>
                            </div>
                        </div>
                        <div className="px-6 pt-4 pb-2 text-right font-semibold">
                            <h4>Lession <span>5</span> of <span>7</span></h4>
                        </div>
                    </div>
                </div>
                <div className="w-[80%] cursor-pointer">
                    <div className=" rounded overflow-hidden ">
                        <div className="h-48 ">
                            <img className='w-[100%] h-[100%]' src={IHistory} alt="" srcset="" />
                        </div>
                        <div className="px-6 py-4">
                            <div className="h-6  mb-2">
                                <h4 className='font-semibold text-2xl '>AWS Certified Solutions Architect</h4>
                            </div>
                            <div className="h-4 mt-10 flex items-center ">
                                <img className='w-[42px] h-[42px] bg-cover bg-slate-400 rounded-full ' src={IUser} alt="" srcset="" />
                                <h5 className='ml-[5%]'>Lina</h5>
                            </div>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <div className="h-2 bg-gray-300  w-full rounded-full">
                                <div className="h-2  bg-[#49BBBD] w-1/4 mb-2 rounded-full">

                                </div>
                            </div>
                        </div>
                        <div className="px-6 pt-4 pb-2 text-right font-semibold">
                            <h4>Lession <span>5</span> of <span>7</span></h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full ml-[88%] mt-[2%]'>
                <ul className='flex '>
                    <li className='w-[45px] h-[45px] mr-4 rounded-lg bg-[#49BBBD] flex items-center justify-center'><ChevronLeftIcon /></li>
                    <li className='w-[45px] h-[45px] rounded-lg bg-[#49BBBD] flex items-center justify-center'><NavigateNextIcon /></li>
                </ul>
            </div>
            <div className='h-10'>

            </div>
        </div>

    );
}

export default History;
