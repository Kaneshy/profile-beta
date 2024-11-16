import React from 'react'


interface BadgesSectionProps {
    idBadget: string;
}
const ArtWork = ({ idBadget }: BadgesSectionProps) => {
    return (
        <div className='p-8 flex flex-col'>
            <label htmlFor="main" className='text-xl c-1 eb-garamond p-1 relative flex justify-center items-center text-slate-200 rounded-t-sm'>
            Secretland
            </label>
            <div className='w-full  flex-col p-2 c-2  flex items-center '>
                <img className='max-h-screen ' src={idBadget} alt="" />
                <div className='p-4 gap-4 text-lg eb-garamond'>
                    <div className='text-center  '>
                        <div className=' flex justify-start   w-full'>Secretland by Section</div>
                        <div className='text-sm '>Secretland by Section</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtWork