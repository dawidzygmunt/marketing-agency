import { Star } from "lucide-react"
import React from "react"
import FiveStar from "./five-star"
import { InfiniteMovingCards } from "@/components/ui/moving-cards"
import Image from "next/image"
import CalendarMeetings from "./calendar-meetings"

const Reviews = () => {
  const testimonials = [
    {
      quote:
        "Współpraca z firmą X była strzałem w dziesiątkę. Profesjonalizm i zaangażowanie zespołu przerosły nasze oczekiwania. Dzięki nim nasza firma osiągnęła nowy poziom efektywności.",
      name: "Anna Kowalska",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "Dzięki firmie X udało nam się znacznie zwiększyć naszą widoczność w sieci. Ich kreatywność i profesjonalne podejście do klienta są godne podziwu.",
      name: "Katarzyna Wiśniewska",
      title: "dyrektor marketingu",
    },
    {
      quote:
        "Firma X zapewniła nam nie tylko świetne rozwiązania, ale również wsparcie na każdym etapie realizacji projektu. Polecam ich usługi każdemu, kto szuka solidnego partnera biznesowego.",
      name: "Jan Domagała",
      title: "Branża IT",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ]
  return (
    <div className="bg-white text-black sm:px-20 md:px-36 2xl:px-60 my-10">
      <div className="flex flex-col items-center py-24 text-center">
        <span className="tracking-widest font-bold">Nasze współprace</span>
        <h2 className="font-bold text-5xl xl:text-6xl my-5 mx-5">
          Zaufanie to podstawa
        </h2>
        <p className="font-semibold text-md mx-3 max-w-[700px]">
          Zaufało nam już ponad 50 klientów. To dla nas ogromny zaszczyt i dowód
          na to, że nasze usługi spełniają najwyższe standardy jakości.
          Przekonaj się sam, dlaczego nasi klienci wybierają właśnie nas.
        </p>
      </div>
      <div className="bg-black p-6 rounded-lg flex justify-center">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>

      <div className="flex flex-col items-center py-2 text-center my-26 mt-36">
        <h2 className="font-bold text-5xl xl:text-6xl mb-7 mx-5">
          Darmowa konstultacja
        </h2>
        <p className="font-semibold text-md mx-3 max-w-[700px]">
          Mieliśmy wielkie szczęście, że nasi członkowie zespołu współpracowali
          z globalnymi markami w różnych branżach.
        </p>
      </div>
      <CalendarMeetings />
    </div>
  )
}

export default Reviews
