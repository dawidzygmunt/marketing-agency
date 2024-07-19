"use client"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { daysOfWeekMap } from "@/data"
import { useEffect, useState } from "react"
import TimeTile from "./calendar/time-tile"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, Globe, Video } from "lucide-react"
import { generateHours } from "@/utils/generate-hours"
import { ScrollArea } from "@/components/ui/scroll-area"

const CalendarMeetings = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [timeFormat, setTimeFormat] = useState("24")
  const [hours, setHours] = useState<string[]>([])

  const disabledMatcher = [{ dayOfWeek: [0] }, { before: new Date() }]

  useEffect(() => {
    setHours(generateHours())
  }, [timeFormat])

  return (
    <div className="flex mb-20 m-10 justify-center">
      <div className="border p-4 flex flex-col text-black">
        <Avatar className="w-[30px] h-[30px]">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="text-gray-600 text-xs my-3">DigitalAgency</span>
        <h2 className="text-xl font-bold">Konsultacje</h2>
        <p className="text-sm max-w-[80%]">Wybierz dogodny dla Ciebie termin</p>
        <div className="my-3 font-semibold flex flex-col gap-3">
          <div className="flex items-center gap-2 text-m">
            <Clock size={15} />
            15 minut
          </div>

          <div className="flex items-center gap-2 text-md">
            <Video size={15} />
            Rozmowa wideo
          </div>

          <div className="flex items-center gap-2 text-md">
            <Globe size={15} />
            Europa/Warszawa
          </div>
        </div>
      </div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={disabledMatcher}
        className="border border-l-0"
      />
      <div className="border border-l-0 p-4 flex flex-col">
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center text-xs gap-1 -tracking-wide">
            <span className="font-extrabold min-w-[35px] text-center">
              {daysOfWeekMap
                .get(Number(date?.getDay()))
                ?.toUpperCase()
                .slice(0, 3)}
              .
            </span>
            <span className="flex flex-col font-semibold text-sm">
              {date?.getDate()}
            </span>
          </div>

          <div className="flex text-xs border rounded-md p-1">
            <Button
              className={`py-7 ${timeFormat === "12" ? "bg-slate-200" : ""}`}
              onClick={() => setTimeFormat("12")}
            >
              12 <br /> godz.
            </Button>
            <Button
              className={`py-7 ${timeFormat === "24" ? "bg-slate-200" : ""}`}
              onClick={() => setTimeFormat("24")}
            >
              24 <br /> godz.
            </Button>
          </div>
        </div>
        <div className="flex flex-col mt-5">
          <ScrollArea
            className="h-[400px] scroll-m-2 px-3"
            scrollHideDelay={60000}
          >
            {hours.map((time) => (
              <TimeTile key={time} time={time} />
            ))}
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

export default CalendarMeetings
