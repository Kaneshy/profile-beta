'use client'
import React, { useState } from 'react'


const TextSection = () => {

    const [dropdown, setDropdown] = useState<boolean>(false);


    return (
        <section className='w-full p-8 flex flex-col rounded-xl'>
            <label htmlFor="main" className='text-xl courier-prime-bold p-1  relative bg-color_title  flex justify-center items-center text-slate-400 c-1 rounded-t-sm'>
                Le Petit Prince
                <div
                    onClick={() => setDropdown(!dropdown)}
                    className='absolute px-2 py-1 bg-color_title courier-prime-regular rounded-full bg-opacity-50 right-3 text-xs  flex items-center '> {dropdown ? 'hide' : 'see all'} </div>
            </label>
            <div
                onClick={() => setDropdown(true)}
                className={`text-sm p-4 c-2 courier-prime-regular overflow-hidden ${dropdown ? '' : 'max-h-[350px] select-none'} text-slate-400 min-h-[250px]   rounded-b-sm flex  `}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nisi animi cupiditate adipisci quo deserunt mollitia harum. Asperiores eaque ratione labore libero suscipit praesentium fugiat minus, recusandae obcaecati facere illo.
                <br /> <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita itaque iusto quisquam aliquid, nulla tempora a rerum sunt neque dolore eos tempore odit voluptates temporibus illum at. Enim, aut repellat. <br /> <br />

            </div>

        </section>
    )
}

export default TextSection