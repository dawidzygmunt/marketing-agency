import { Button } from "@/components/ui/button"
import React from "react"
import SingleProject from "./single-project"

const Projects = () => {
  return (
    <div className="bg-white text-purpleText flex flex-col font-semibold items-center text-center sm:px-20 md:px-36 2xl:px-60 text-lg">
      <h2 className="text-black text-6xl font-semibold m-6 mt-24">
        Nasze projekty
      </h2>
      <p className="font-bold text-smallText">
        Spójrz na niektóre z naszych ostatnich projektów w Webflow. Obsługujemy
        wszystkie branże, ponieważ naszą specjalizacją jest platforma Webflow.
      </p>
      <Button className="bg-purple text-md font-bold px-8 py-7 m-10">
        Zobacz wszystkie projekty
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 my-20">
        <SingleProject
          src="/images/project1.png"
          title="Mission Zero"
          description="A Webflow development for the largest gaming industry copmany"
          href="/"
        />
        <SingleProject
          src="/images/project1.png"
          title="Mission Zero"
          description="A Webflow development for the largest gaming industry copmany"
          href="/"
        />
        <SingleProject
          src="/images/project1.png"
          title="Mission Zero"
          description="A Webflow development for the largest gaming industry copmany"
          href="/"
        />
        <SingleProject
          src="/images/project1.png"
          title="Mission Zero"
          description="A Webflow development for the largest gaming industry copmany"
          href="/"
        />
      </div>
    </div>
  )
}

export default Projects
