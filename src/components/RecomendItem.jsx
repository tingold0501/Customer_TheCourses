import React from 'react';
import DiscountIcon from '@mui/icons-material/Discount';
function RecomendItem(props) {
    return (
        <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="mb-3 text-xl font-bold text-[#49BBBD]">Beginner Friendly</h3>
            <div className="relative">
                <img className="w-full rounded-xl" src={props.image} alt="Colors" />
                {props.discount == 100 && (
                    <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p>
                )}
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">{props.name}</h1>
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
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#49BBBD] mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg> */}
                        <DiscountIcon className='text-[#49BBBD]'/> 
                    </span>
                    <p>{props.discount}</p><span>%</span>
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
    );
}

export default RecomendItem;
