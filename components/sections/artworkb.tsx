import React from 'react'


interface BadgesSectionProps {
    idBadget: string;
}
const ArtWorkB = ({ idBadget }: BadgesSectionProps) => {
    return (
        <div className='p-8 flex flex-col'>
            <label htmlFor="main" className='text-xl c-1 eb-garamond p-1 relative flex justify-center items-center text-slate-200 rounded-t-sm'>
                Secretland
            </label>
            <div className='w-full  flex-col c-2  flex items-center justify-center'>
                <img className='max-h-screen ' src={idBadget} alt="" />
                <div className=' gap-4 text-lg eb-garamond  w-full  items-center justify-center'>
                    <div
                        className={`text-sm p-4 c-2 courier-prime-regular overflow-hidden  text-slate-400 min-h-[250px]   rounded-b-sm flex  `}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nisi animi cupiditate adipisci quo deserunt mollitia harum. Asperiores eaque ratione labore libero suscipit praesentium fugiat minus, recusandae obcaecati facere illo.
                        <br /> <br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita itaque iusto quisquam aliquid, nulla tempora a rerum sunt neque dolore eos tempore odit voluptates temporibus illum at. Enim, aut repellat. <br /> <br />

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ArtWorkB