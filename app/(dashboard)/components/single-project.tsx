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
      <div className="text-black my-20">
        <Image
          src={src}
          width={700}
          height={700}
          alt="project"
          className="rounded-md"
        />
        <Separator className="my-7 bg-black" />
        <div className="flex flex-col items-start">
          <h3 className="text-4xl">{title}</h3>
          <p className="mr-10 my-1 text-[#363636]">{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default SingleProject
