import Link from 'next/link'
import React from 'react'

const Button = (props:any) => {
  return (
      
        <button
            type="button"
          className={`${
            props.gray && "bg-[#000] text-[18px] text-[#fff]"
          } bg-white rounded-lg lg:mx-0px-6 py-3 px-8 font-bold text-black shadow my-6  focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out flex-1 hover:bold`}
        >
          {props.text}
        </button>
    );
}

export default Button
