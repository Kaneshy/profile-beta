import React from 'react'

const VideoSection = () => {


    return (
        <div className='p-8 flex flex-col ' >
            <label htmlFor="main" className='text-xl eb-garamond p-1 relative flex justify-center items-center text-slate-200 opacity-80 bg-[#04030e] rounded-t-sm'>
                Secretland
            </label>
            <div className='w-full flex-col p-2 bg-opacity-60 bg-black flex items-center justify-center'>
                <video className='w-full max-h-screen' autoPlay loop muted >
                    <source src="https://res.cloudinary.com/dztz492su/video/upload/v1725938783/books/xqnpbmylclthgbbj2vln.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className='p-4 gap-4 text-lg eb-garamond w-full columns-2 items-center justify-center'>
                    <div className='text-center w-full'>
                        <div>Secretland</div>
                        <div>Edwind Prato</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoSection