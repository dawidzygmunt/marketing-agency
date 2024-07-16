import { Button } from "@/components/ui/button"
import Image from "next/image"
import mask from "@/public/mask.svg"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col sm:items-center p-5 lg:p-24 pt-16 bg-slate-800">
      <div>
        <p className="uppercase text font-bold tracking-wide">
          webflow experts
        </p>
        <h1 className="text-6xl font-bold mr-36 my-10">Śląska Agencja PL</h1>
        <p>
          Jesteśmy wiodącą agencją Webflow z siedzibą w Mikołowie, certyfikowaną
          przez Webflow jako profesjonalny partner.{" "}
        </p>

        <Button className="bg-[#5e00ff] font-bold px-10 py-6 my-10 text-md hover:bg-[#6e00ff] hover:shadow-inner hover:shadow-blue-500 transition-all duration-300">
          Bezpłatna konsultacja
        </Button>
      </div>
      <div>
        <video width="640" height="480" controls preload="none" autoPlay>
          <source src="public/Homevidy.mp4" type="video/mp4" />
          <track src="public/Homevidy.mp4" srcLang="en" label="English" />
          Your browser does not support the video tag.
        </video>
        <Image src={mask} alt="mask" />
      </div>
    </main>
  )
}
