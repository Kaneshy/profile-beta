'use client'
import { fetchOneBadget } from '@/actions/fetch/main'
import React, { useEffect, useState } from 'react'

interface BadgesSectionProps {
    idBadget: string;
}

interface Badge {
    _id: string;
    name: string;
    desc: string;
    lev: number;
    img: string;
}

interface Item {
    _id: string;
    name: string;
    badgets?: Badge[]; // Use optional chaining if badgets can be undefined
}

const StickersSection = ({ idBadget }: BadgesSectionProps) => {

    const [datafetched, setdatafetched] = useState<Item[]>([])

    useEffect(() => {
      const fetchOne = async () => {
        const res = await fetchOneBadget(idBadget)
        setdatafetched(res)
        console.log(33444, res)
      }
      fetchOne()
    }, [])
    

    interface Image {
        id: number;
        src: string;
        alt: string;
    }
    
    
    const [dropdown, setDropdown] = useState<boolean>(false);



    return (
        <div>



            <div className='w-full p-8 flex flex-col rounded-xl'>
                <label htmlFor="main" className='text-xl p-1 relative flex justify-center items-center text-slate-200 opacity-80 bg-[#04030e] rounded-t-sm'>
                    Title
                    <div
                        onClick={() => setDropdown(!dropdown)}
                        className='absolute px-2 py-1 bg-gray-700 rounded-full bg-opacity-50 right-3 text-xs  flex items-center '> {dropdown ? 'hide' : 'see all'} </div>
                </label>
                <div
                    onClick={() => setDropdown(true)}
                    className={`text-sm p-4 bg-[#000000] bg-opacity-60 overflow-hidden ${dropdown ? '' : 'max-h-[550px] select-none'} text-slate-400 min-h-[450px]   rounded-b-sm flex  `}>

                    <div className="grid-b p-8">
                        {datafetched.badgets?.map((image, index:number) => (
                            <div
                            title="Click me!"
                                key={index}
                                className="relative flex items-center group  justify-center w-full h-20">
                                <img
                                    src={image.img}
                                    className="rounded-lg w-20"
                                />
                               
                            </div>
                        ))}
                    </div>


                </div>

            </div>
        </div>

    )
}

export default StickersSection