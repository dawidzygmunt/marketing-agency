import { Button } from "@/components/ui/button"
import VideoPlayer from "./components/video-player"
import Projects from "./components/projects"
import Statistics from "./components/statistics"
import Services from "./components/services"
import { useEffect } from "react"

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col sm:items-center lg:p-24 pt-16 bg-slate-800">
        <div className="p-5">
          <p className="uppercase text font-bold tracking-wide">
            webflow experts
          </p>
          <h1 className="text-6xl font-bold mr-36 my-10">Śląska Agencja PL</h1>
          <p>
            Jesteśmy wiodącą agencją Webflow z siedzibą w Mikołowie,
            certyfikowaną przez Webflow jako profesjonalny partner.{" "}
          </p>

          <Button className="bg-[#5e00ff] font-bold px-10 py-6 my-10 text-md hover:bg-purple hover:shadow-inner hover:shadow-blue-500 transition-all duration-300">
            Bezpłatna konsultacja
          </Button>
          <VideoPlayer />
        </div>
      </main>
      <div className="h-[100px] w-full bg-purple"></div>
      <Projects />
      <Statistics />
      <Services />
    </>
  )
}
