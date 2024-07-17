"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import path from "path"
import Link from "next/link"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
  ]

  return (
    <>
      <nav className="bg-black text-white border-b border-slate-500 sticky top-0 z-50 md: px-36 lg:px-48">
        <div className="flex justify-between items-center p-4">
          <h1 className="ml-4">AgencyMarketing</h1>
          <ul className={`hidden lg:flex gap-8 `}>
            {navLinks.map((link) => (
              <li key={link.title}>
                <a href={link.path}>{link.title}</a>
              </li>
            ))}
          </ul>

          <div className="flex">
            <Button className="bg-purple px-9 hidden md:block">Kontakt</Button>
            <Button
              className="bg-inherit hover:bg-inherit lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu size={22} />
            </Button>
          </div>
        </div>

        <div className="relative">
          <div
            className={`lg:hidden ${
              isOpen ? "animate-slideDown ease-in-out" : "hidden"
            } border rounded-2xl absolute top-2 left-8 right-8 bg-black`}
          >
            {isOpen && (
              <ul className={`flex flex-col items-start p-2 py-3`}>
                {navLinks.map((link) => (
                  <Link href={link.path} key={link.path} className="w-full">
                    <li className=" p-3 px-10 hover:bg-[#ffffff15] duration-300">
                      {link.title}
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
