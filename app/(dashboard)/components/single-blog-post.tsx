import { Button } from "@/components/ui/button"
import Image from "next/image"
import React from "react"

const SingleBlogPost = () => {
  return (
    <div
      className="bg-white text-black flex flex-col items-center border hover:-translate-y-2 transition-all duration-200 rounded-lg 
        hover:cursor-pointer max-w-[700px]"
    >
      <Image
        src="/agency/images/example-service.png"
        width={800}
        height={800}
        alt="blog image"
        className="rounded-t-lg bg-cover object-fill w-full"
      />
      <div className="w-full flex flex-col items-start p-4 gap-3">
        <div className="border border-purple text-purple px-4 py-1 rounded-sm my-4 font-semibold">
          Kategoria
        </div>
        <h3 className="text-2xl font-semibold">Example Title</h3>
        <span className="text-sm">May 3, 2024</span>
        <p className="text-black font-semibold text-lg mr-14 line-clamp-4 xl:line-clamp-none">
          Curabitur finibus fermentum nulla sed porttitor. Mauris facilisis
          justo non egestas cursus. Donec pretium lectus sit amet venenatis
          sollicitudin. Suspendisse non finibus nunc. Phasellus vel laoreet
          metus. Pellentesque tincidunt tellus id erat aliquam, at sollicitudin
          erat eleifend.
        </p>
        <Button className="text-purple text-lg font-semibold mt-4 px-0">
          Czytaj więcej
        </Button>
      </div>
    </div>
  )
}

export default SingleBlogPost
