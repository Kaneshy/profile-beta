'use client'
import ArtWork from "@/components/sections/artWork"
import BadgesSection from "@/components/sections/badgesSection"
import TabsBPage from "@/components/sections/tabsDuo"
import TextSection from "@/components/sections/textSection"
import VideoSection from "@/components/sections/video"
import Hovercard from "@/components/utils/hovercard"


const PhotosMain = () => {
  return (

    <div className="w-full  flex items-center justify-center ">
      <div className="flex pt-2 flex-col    ">
        <Hovercard />
        <TextSection />
        <BadgesSection idBadget={'6723bb90ff345ae44c1efa96'} />
        {/* <ArtWork />
        <BadgesSection idBadget={'6719b95b21614a7e5ed1a64d'} />
        <TabsBPage />
        <VideoSection /> */}
      </div>
    </div>

  )
}

export default PhotosMain