"use client"
import { Button } from "@/components/ui/button"
import VideoPlayer from "./components/video-player"
import Projects from "./components/projects"
import Statistics from "./components/statistics"
import Services from "./components/services"
import Reviews from "./components/reviews"
import Faq from "./components/faq"
import LatestArticles from "./components/latest-articles"
import Footer from "./components/footer"

export default function Home() {
  return (
    <>
      {/* <main className="flex min-h-screen flex-col sm:items-center px-10 sm:px-20 md:px-36 2xl:px-60 lg:py-32  pt-16 bg-black">
        <div className="p-5 w-full">
          <p className="uppercase text font-bold tracking-widest text-sm">
            webflow experts
          </p>
          <h1 className="text-6xl xl:text-8xl font-bold mr-36 my-10">
            Najlepsza Agencja PL
          </h1>
          <p className="xl:text-2xl xl:w-[50%]">
            Jesteśmy wiodącą agencją Webflow z siedzibą w Katowicach,
            certyfikowaną przez Webflow jako profesjonalny partner.{" "}
          </p>

          <Button className="bg-[#5e00ff] font-bold px-10 py-6 my-10 text-md hover:bg-purple hover:shadow-inner hover:shadow-blue-500 transition-all duration-300">
            Bezpłatna konsultacja
          </Button>
          <VideoPlayer />
        </div>
      </main> */}
      <div className="h-[100px] w-full bg-purple"></div>
      {/* <Projects /> */}
      {/* <Statistics /> */}
      <Services />
      {/* <Reviews /> */}
      {/* <Faq /> */}
      {/* <LatestArticles /> */}
      {/* <Footer /> */}
    </>
  )
}
