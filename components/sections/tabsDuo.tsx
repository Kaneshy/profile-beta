import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, Edit, MessageCircle, MoreHorizontal, UserPlus } from "lucide-react"

const TabsBPage = () => {
  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-8 pb-16">
    <Tabs defaultValue="photos" className="w-full">
      <TabsList className="w-full justify-start">
        <TabsTrigger value="photos" className="flex-1">Photos</TabsTrigger>
        <TabsTrigger value="posts" className="flex-1">Posts</TabsTrigger>
      </TabsList>
      <TabsContent value="photos">
        <Card>
          <CardContent className="p-6 ">
            <h2 className="text-lg font-semibold">Photos</h2>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((photo) => (
                <div key={photo} className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={`https://res.cloudinary.com/dztz492su/image/upload/v1727572645/books/wri5isyly4acp5bq22h2.jpg`}
                    alt={`Photo ${photo}`}
                    className="h-full w-full object-cover"
                    width={300}
                    height={300}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="posts" className="mt-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold">Recent Posts</h2>
            <div className="mt-4 space-y-4">
              {[1, 2, 3].map((post) => (
                <div key={post} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      src="https://res.cloudinary.com/dztz492su/image/upload/v1727721181/books/e7nwbv4xzpayn9bglevj.jpg"
                      alt="User avatar"
                      className="h-10 w-10 rounded-full"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <p className="text-sm font-medium">Jane Doe</p>
                    <p className="text-sm text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
  )
}

export default TabsBPage