import React from "react"
import SingleBlogPost from "./single-blog-post"
import { Button } from "@/components/ui/button"

const LatestArticles = () => {
  return (
    <div className="flex flex-col items-center bg-white text-black p-10 py-24 sm:px-20 md:px-36 2xl:px-60 ">
      <span className="text-sm font-bold tracking-widest uppercase">blog</span>
      <h3 className="text-5xl xl:text-6xl my-5 font-semibold">
        Ostatnie artykuly
      </h3>
      <p className="text-lg max-w-[70%] m-4">
        Bądź na bieżąco z najnowszymi wiadomościami i wydarzeniami Webflow.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 xl:gap-8 my-16">
        <SingleBlogPost />
        <SingleBlogPost />
        <SingleBlogPost />
      </div>

      <div className="flex flex-col items-center bg-purple text-white w-full p-10 rounded-lg my-28 text-center">
        <span className="uppercase tracking-widest font-semibold text-sm my-6">
          contact us
        </span>
        <h3 className="text-5xl font-bold">Opowiedz nam o swoim projekcie</h3>
        <Button className="bg-black font-bold text-md px-10 py-7 rounded-lg mt-10">
          Wypełnij furmularz
        </Button>
      </div>
    </div>
  )
}

export default LatestArticles
