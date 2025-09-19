"use client"

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

interface FilterCarouselProps{
    value?: string | null,
    isLoading?: boolean,
    onSelect?: (value: string | null) => void;
    data: {
        value: string;
        label: string;
    }[];
}

export const FilterCarousel = ({
    value,
    isLoading,
    onSelect,
    data
} : FilterCarouselProps) => {
    return(
        <div className="relative w-full">
            {/* Left fade */}
             <div
                className={cn(
                    "absolute left-12 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none",
                    false && "hidden"
                )}
             >

             </div>
            <Carousel
                opts={{
                    align: "start",
                    dragFree: true
                }}
                className="w-full px-12"
            >
                <CarouselContent className="-ml-3">
                    <CarouselItem className="pl-3 basis-auto">
                        <Badge
                            variant={value === null ? "default" : "secondary"}
                            className="rounded-lg px-3 py-1 cursor-pointer whitespace-nowrap text-sm"
                        >
                            All
                        </Badge>
                    </CarouselItem>
                    {data.map((item) =>(
                        <CarouselItem key={item.value} className="pl-3 basis-auto">
                            <Badge  variant={value === item.value ? "default" : "secondary"}
                            className="rounded-lg px-3 py-1 cursor-pointer whitespace-nowrap text-sm">
                                {item.label}
                            </Badge>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext className="right-0 z-20" />
                <CarouselPrevious className="left-0 z-20" />
                {/* Right fade */}
             <div
                className={cn(
                    "absolute right-12 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none",
                    false && "hidden"
                )}
             ></div>
            </Carousel>
        </div>
    )
}