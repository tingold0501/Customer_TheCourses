import React from 'react';

function CategoryItem({ props }) {
  return (
    <div className='cursor-pointer'>
      <div data-aos="fade-up" className=" flex flex-col items-center gap-3 px-8 py-10 bg-white drop-shadow-2xl rounded-3xl shadow-main">
        <span>
          {props.svg}
        </span>
        <p className="text-2xl font-extrabold text-dark-grey-900">{props.title}</p>
        <p className="text-base text-center leading-7 text-dark-grey-600">
          {props.detail}
        </p>
      </div>
    </div>
  );
}

export default CategoryItem;