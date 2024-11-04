'use client'
import PhotosMain from "@/components/main/photos"
import ProfileMain from "@/components/main/profile"
import { useState } from "react"


export default function Component() {

  const [newPostInput, setnewPostInput] = useState<Boolean>(false)
  const [sectionChoose, setsectionChoose] = useState(1)

  const sections = [
    { id: 1, label: "section", component: <ProfileMain /> },
    { id: 2, label: "photos", component: <PhotosMain /> },
    { id: 3, label: "videos", component: <ProfileMain /> }, // Assuming ProfileMain is intentional here
  ];


  return (
    <div>
      <div className="video-background">
        <video className="z-10 " autoPlay muted loop id="bg-video">
          <source src="https://res.cloudinary.com/dztz492su/video/upload/v1729302276/books/nakureb7pqzxhw5ast7l.webm" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>

        <div className="content z-20 ">
          <div
            className="w-full  z-20 min-h-screen pb-16">

            <div className="relative   h-[200px] md:h-[250px]">

            </div>
            <div className="w-full flex items-center justify-center">
              <div
                style={{
                  background: "linear-gradient(-100deg, rgba(203, 157, 0, 0.8) 0%, rgba(231, 148, 212, 0.8) 70%, rgba(72, 92, 43, 0.8) 100%)",
                }}
                className="max-w-4xl  rounded-lg"
              >

                <div className="  p-4 mx-auto px-4 sm:px-6 lg:px-8 pb-8">
                  <div className=" sm:items-end sm:space-x-5 relative -mt-16 sm:-mt-20">
                    <div className="relative   flex">
                      <img
                        className=" absolute -left-4 -top-4  h-32 w-32 sm:h-40 sm:w-40  "
                        src="https://res.cloudinary.com/dztz492su/image/upload/v1729301295/books/n09zznudbktfv9hrntbw.png" alt="" />
                      <img
                        src="https://res.cloudinary.com/dztz492su/image/upload/v1728320654/books/h4oczmxrpfnvsf1vcezc.png"
                        alt="Profile picture"
                        className=" h-24 w-24 sm:h-32 sm:w-32  "
                        width={200}
                        height={200}
                      />
                      <div className="bg-[#181732] ml-4 bg-opacity-75 h-24 w-36 sm:h-32 sm:w-44 rounded-xl  " >
                        <div className="  md:block mt-6  min-w-0 flex-1">
                          <h1 className="text-2xl font-bold text-gray-100 truncate">Akane</h1>
                          <p className="text-sm text-gray-400">@Akane</p>
                        </div>
                      </div>

                    </div>
                    <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">

                      {/* <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <Button>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit profile
                        </Button>
                        <Button
                          onClick={() => setnewPostInput(!newPostInput)}
                          variant="secondary">
                          <UserPlus className="mr-2 h-4 w-4" />
                          New Post
                        </Button>
                        <Button variant="secondary">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          Message
                        </Button>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">More options</span>
                        </Button>
                      </div> */}
                    </div>
                  </div>

                </div>
                {/* {newPostInput && (
                  <div className="flex  flex-col pb-16">
                    <PostInput />
                  </div>
                )} */}
                <div className="p-2 sticky z-50 bg-black bg-opacity-75 text-xs top-0 flex justify-evenly">
                  {sections.map(({ id, label }) => (
                    <div key={id} onClick={() => setsectionChoose(id)}>
                      {label}
                    </div>
                  ))}
                </div>
                {sections.find(({ id }) => id === sectionChoose)?.component}

              </div>
            </div>



          </div>
        </div>
      </div>
    </div>

  )
}