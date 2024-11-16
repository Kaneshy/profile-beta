import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

interface CarouselDemoProps {
    imgPopUp?: string[];
}

export default function CarouselDemo({ imgPopUp = [] }: CarouselDemoProps) {
    if (!imgPopUp || imgPopUp.length === 0) {
        return <div className="dark lg:h-[96vh] bg-background text-foreground p-8 flex items-center justify-center">No images to display</div>
    }

    const showNavigation = imgPopUp.length > 1; 

    return (
        <div className="dark h-[95vh] select-none  bg-background  text-foreground p-8">
            <Carousel className="relative">
                <CarouselContent>
                    {imgPopUp.map((x, index) => (
                        <CarouselItem key={index}>
                            <Card className="relative border-0">
                                <CardContent className="flex h-[90vh]  items-center justify-center ">
                                    <img src={x} alt={`Popup ${index + 1}`} className="max-w-full  h-[90vh] object-contain" />
                                </CardContent>
                                {showNavigation && (
                                    <>
                                        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                                        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
                                    </>
                                )}
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}