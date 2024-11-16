'use client'
import { fetchAllAssets } from '@/actions/fetch/main'
import React, { useEffect, useRef, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import CarouselDemo from '../shadcn/carrousel';



interface Badge {
  _id: string;
  name: string;
  desc: string;
  url: string[];
  urlIg: string;
}

const GalleryPage = () => {
  const [first, setfirst] = useState<Badge[]>([])
  const [imgpopup, setimgpopup] = useState(false)
  const [imgPopUp, setimgPopUp] = useState<string[]>([])

  const popupRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetchAllAssets()
      console.log(3333, res)
      setfirst(res)
    }
    fetchdata()
  }, [])


  const handlePopUpImg = (url: string[], index: number) => {
    setimgPopUp(url)
    setimgpopup(true)
  }
  const handleOverlayClick = (e: React.MouseEvent<HTMLElement>) => {
    // Close the popup if the click is outside the image
    if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
      setimgpopup(!imgpopup)
    }
  };


  return (
    <div className="w-full bg-opacity-10 p-6 bg-[#000000] min-h-screen">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {first.map((x, i) => (
          <div

            key={x._id} className=" bg-opacity-90 hover:bg-opacity-10 flex flex-col   overflow-hidden transform transition duration-300">
            <img
              onClick={() => handlePopUpImg(x.url, i)}
              src={x.url[0]}
              alt={x.name}
              className="flex-1 object-cover rounded-lg w-full  h-auto hover:shadow-lg "
            />


            <div className="  text-center">
              <h2 className="text-sm font-semibold text-gray-100 h-4 overflow-hidden">{x.name}</h2>
              <p className="text-gray-400 text-xs h-6 overflow-hidden">{x.desc}</p>
            </div>
          </div>
        ))}
      </div>
      {imgpopup && (
        <section className="flex fixed inset-0 z-50 min-h-screen w-full  ">
          <div
            onClick={handleOverlayClick}
            className="fixed inset-0 z-40 flex justify-center popup-container  overflow-y-scroll bg-black"
          >
            <button
              onClick={() => setimgpopup(!imgpopup)}
              className="absolute hover:bg-opacity-50 max-sm:right-1/2 max-sm:bottom-6 bg-opacity-30 z-50 sm:top-2 right-2 text-white bg-white p-2 rounded-full"
            >
              <IoMdClose size={18} />
            </button>
            <div ref={popupRef} className="relative z-40  flex max-lg:flex-col items-center ">
              <div className='flex justify-center m-4  '>
                <CarouselDemo imgPopUp={imgPopUp} />
              </div>

              <div className="text-white relative  bg-zinc-950 lg:h-[95vh]  h-full text-lg flex-colflex justify-center  p-4 items-center  lg:max-w-md">
                <div className=' flex-col max-lg:pb-10 max-h-[600px]  popup-container  overflow-auto w-full   '>
                  <p className="mt-2 courier-prime-regular text-sm  ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nisi animi cupiditate adipisci quo deserunt mollitia harum. Asperiores eaque ratione labore libero suscipit praesentium fugiat minus, recusandae obcaecati facere illo.
                    <br /> <br />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita itaque iusto quisquam aliquid, nulla tempora a rerum sunt neque dolore eos tempore odit voluptates temporibus illum at. Enim, aut repellat. <br /> <br />

                  </p>
                </div>
                <div className='absolute  bg-zinc-950 bottom-3 right-0 w-full items-center  flex justify-end'>
                  <h2 className="text-lg font-bold w-full ">Image Title by aunton</h2>
                  <div className='flex justify-between gap-4 mr-6'>
                    <div>
                      <FaInstagram size={22} />
                    </div>
                    <div>
                      <FaGoogle size={22} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

    </div>


  )
}

export default GalleryPage
