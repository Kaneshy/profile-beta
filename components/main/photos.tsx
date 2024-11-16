'use client'
import BadgesSection from "@/components/sections/badgesSection"
import TextSection from "@/components/sections/textSection"
import Hovercard from "@/components/utils/hovercard"
import GalleryPage from "../sections/gallery"


const PhotosMain = () => {
  return (

    <div className="w-full  flex items-center justify-center ">
      <div className="flex  flex-col    ">
        <GalleryPage />
      </div>
    </div>

  )
}

export default PhotosMain