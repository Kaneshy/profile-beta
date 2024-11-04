'use client'
import ArtWork from "@/components/sections/artWork"
import BadgesSection from "@/components/sections/badgesSection"
import TabsBPage from "@/components/sections/tabsDuo"
import TextSection from "@/components/sections/textSection"
import VideoSection from "@/components/sections/video"
import Hovercard from "@/components/utils/hovercard"
import StickersSection from "../sections/stickers"




const ProfileMain = () => {
    return (

        <div className="w-full  flex items-center justify-center ">
            <div className="flex pt-2 flex-col    ">
                <Hovercard />
                <TextSection />
                <BadgesSection idBadget={'6723bb90ff345ae44c1efa96'} />
                <ArtWork idBadget={'https://res.cloudinary.com/dztz492su/image/upload/v1727572646/books/rtasntdpwsqbjand62vc.jpg'}/>
                <StickersSection idBadget={'6728602961a76c236b69c09c'} />
                <ArtWork idBadget={'https://res.cloudinary.com/dztz492su/image/upload/v1727572645/books/qqmctw4yf5rz0p0kccvz.jpg'}/>
                <BadgesSection idBadget={'6719b95b21614a7e5ed1a64d'} />
                <VideoSection />
            </div>
        </div>

    )
}

export default ProfileMain