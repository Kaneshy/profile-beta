'use client'
import React, { useState } from 'react'


const TextSection = () => {

    const [dropdown, setDropdown] = useState<boolean>(false);


    return (
        <section className='w-full p-8 flex flex-col rounded-xl'>
            <label htmlFor="main" className='text-xl p-1 relative flex justify-center items-center text-slate-200 opacity-80 bg-[#04030e] rounded-t-sm'>
                Title
                <div
                    onClick={() => setDropdown(!dropdown)}
                    className='absolute px-2 py-1 bg-gray-700 rounded-full bg-opacity-50 right-3 text-xs  flex items-center '> {dropdown ? 'hide' : 'see all'} </div>
            </label>
            <div
                onClick={() => setDropdown(true)}
                className={`text-sm p-4 bg-[#000000] bg-opacity-75  overflow-hidden ${dropdown ? '' : 'max-h-[350px] select-none'} text-slate-400 min-h-[250px]   rounded-b-sm flex  `}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatum est ut sequi totam corporis vitae eaque praesentium itaque at ipsum eius officiis, libero iusto, voluptate fuga quam, earum quos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta odit tempore tempora eveniet perferendis placeat, nihil commodi alias delectus facere laborum blanditiis cum officia distinctio quibusdam minus! Atque, tenetur inventore.
                Labore repudiandae inventore obcaecati, autem consequatur nihil molestias quas. Voluptatum velit corrupti autem labore dolore provident possimus, laborum et enim. Dolorum quae dignissimos et aspernatur reprehenderit eaque magni doloribus repellendus.
                Quia, aperiam placeat ullam porro cupiditate quis nobis eos quasi dolorum neque repellat ea fugiat dolor ratione similique odio dolore deleniti nesciunt iste earum voluptate libero accusantium maiores. Molestiae, fugit?
                Itaque ratione, quo perspiciatis <br/> <br/> necessitatibus minus fugiat maxime mollitia sit vitae, consequatur facilis tempore sint nesciunt ad harum similique laboriosam quaerat aliquid, sed temporibus? Quidem est iusto doloribus adipisci obcaecati!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatum est ut sequi totam corporis vitae eaque praesentium itaque at ipsum eius officiis, libero iusto, voluptate fuga quam, earum quos.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta odit tempore tempora eveniet perferendis placeat, nihil commodi alias delectus facere laborum blanditiis cum officia distinctio quibusdam minus! Atque, tenetur inventore.
                Labore repudiandae inventore obcaecati, autem consequatur nihil molestias quas. Voluptatum velit corrupti autem labore dolore provident possimus, laborum et enim. Dolorum quae dignissimos et aspernatur reprehenderit eaque magni doloribus repellendus.
                Quia, aperiam placeat <br/> <br/> ullam porro cupiditate quis nobis eos quasi dolorum neque repellat ea fugiat dolor ratione similique odio dolore deleniti nesciunt iste earum voluptate libero accusantium maiores. Molestiae, fugit?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta odit tempore tempora eveniet perferendis placeat, nihil commodi alias delectus facere laborum blanditiis cum officia distinctio quibusdam minus! Atque, tenetur inventore.
                Labore repudiandae inventore obcaecati, autem consequatur nihil molestias quas. Voluptatum velit corrupti autem labore dolore provident possimus, laborum et enim. Dolorum quae dignissimos et aspernatur reprehenderit eaque magni doloribus repellendus.
                The Ocean at the End of the Lane
                Novel by Neil Gaiman 

            </div>

        </section>
    )
}

export default TextSection