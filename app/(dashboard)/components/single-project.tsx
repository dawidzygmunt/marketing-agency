import Image from "next/image"
import React from "react"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

interface SingleProjectProps {
  src: string
  title: string
  description: string
  href: string
}

const SingleProject: React.FC<SingleProjectProps> = ({
  src,
  title,
  description,
  href,
}) => {
  return (
    <Link href={href}>
      <div className="text-black group">
        <div className="overflow-hidden">
          <Image
            src={src}
            width={700}
            height={700}
            alt="project"
            className="rounded-md group-hover:scale-105 transition-all ease-in-out duration-700"
          />
        </div>

        <Separator className="relative my-6 bg-gray-200 overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-full bg-gray-700 scale-x-0 origin-left transition-transform duration-700 ease-in-out group-hover:scale-x-100"></div>
        </Separator>
        <div className="flex flex-col items-start">
          <h3 className="text-4xl">{title}</h3>
          <p className="mr-10 my-1 text-[#363636] text-left">{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default SingleProject
