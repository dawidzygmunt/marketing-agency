import { Button } from "@/components/ui/button"
import { TimeLike } from "fs"
import React from "react"

const TimeTile = ({ time }: { time: TimeLike }) => {
  return (
    <div className="flex justify-center items-center my-1">
      <Button className="w-full border rounded-md text-black hover:border-black transition-all duration-100 ease-in-out">
        {time.toLocaleString()}
      </Button>
    </div>
  )
}

export default TimeTile
