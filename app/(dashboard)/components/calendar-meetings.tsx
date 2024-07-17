"use client"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

const CalendarMeetings = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="flex mb-20">
      <div className="border">
        <h2 className="text-2xl font-bold">Umów spotkanie</h2>
        <p className="text-sm">Wybierz dogodny dla Ciebie termin</p>
      </div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="border border-l-0"
      />
      <div className="border border-l-0">Czwartek i piatek</div>
    </div>
  )
}

export default CalendarMeetings
