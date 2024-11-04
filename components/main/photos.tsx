'use client'
import BadgesSection from "@/components/sections/badgesSection"
import TextSection from "@/components/sections/textSection"
import Hovercard from "@/components/utils/hovercard"


const PhotosMain = () => {
  return (

    <div className="w-full  flex items-center justify-center ">
      <div className="flex pt-2 flex-col    ">
        <Hovercard />
        <TextSection />
        <BadgesSection idBadget={'6723bb90ff345ae44c1efa96'} />

      </div>
    </div>

  )
}

export default PhotosMain