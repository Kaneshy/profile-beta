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
                It's a frightening thought that in one fraction of a moment, you can fall into the love that takes a lifetime to get over. Falling for a person isn't a process. You can't plan for it in advance or anticipate its arrival. Love strikes in single moments, anywhere, anytime. One day, whether you are 14, 28, or 65, you will stumble upon someone who will start a fire in you that cannot die. However, the saddest, most awful truth you will ever come to find is that they are not always the one with whom we spend our lives. What a sad thought it is that some of us will surrender and settle down long before we have met the person we are supposed to love.
                <br /> <br />
                But hearts aren't handcuffs, and people aren't prisons. When you feel it's time for you to leave, you leave. You neither need to wait to be released nor ask for permission. Sometimes, the wrong person will remind you to choose yourself every day, leading you through a journey filled with joy, laughter, tears, and pain. The wrong person helps you find yourself, and they will eventually lead you to the right person, at this time, at the right time. Remember, sunsets are proof that endings can often be beautiful, too. <br /> <br /> 

            </div>

        </section>
    )
}

export default TextSection