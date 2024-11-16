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
                        It's a frightening thought that in one fraction of a moment, you can fall into the love that takes a lifetime to get over. Falling for a person isn't a process. You can't plan for it in advance or anticipate its arrival. Love strikes in single moments, anywhere, anytime. One day, whether you are 14, 28, or 65, you will stumble upon someone who will start a fire in you that cannot die. However, the saddest, most awful truth you will ever come to find is that they are not always the one with whom we spend our lives. What a sad thought it is that some of us will surrender and settle down long before we have met the person we are supposed to love.
                        <br /> <br />
                        But hearts aren't handcuffs, and people aren't prisons. When you feel it's time for you to leave, you leave. You neither need to wait to be released nor ask for permission. Sometimes, the wrong person will remind you to choose yourself every day, leading you through a journey filled with joy, laughter, tears, and pain. The wrong person helps you find yourself, and they will eventually lead you to the right person, at this time, at the right time. Remember, sunsets are proof that endings can often be beautiful, too. <br /> <br />

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ArtWorkB