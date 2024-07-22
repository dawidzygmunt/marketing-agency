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
        src="/images/example_service.png"
        width={800}
        height={800}
        alt="blog image"
        className="rounded-t-lg bg-cover object-fill w-full"
      />
      <div className="w-full flex flex-col items-start p-4 gap-3">
        <div className="border border-purple text-purple px-4 py-1 rounded-sm my-4 font-semibold">
          Kategoria
        </div>
        <h3 className="text-2xl font-semibold">
          How to referance fields on webflows
        </h3>
        <span className="text-sm">May 3, 2024</span>
        <p className="text-black font-semibold text-lg mr-14 line-clamp-4 xl:line-clamp-none">
          Reference fields are an essential tool when working with the Webflow
          CMS (Content Management System). They enable you to create
          relationships between different content items, making it easy to reuse
          and manage your data in a structured way.
        </p>
        <Button className="text-purple text-lg font-semibold mt-4 px-0">
          Read more
        </Button>
      </div>
    </div>
  )
}

export default SingleBlogPost
