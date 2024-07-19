import { navLinks } from "@/components/nav-links"
import Link from "next/link"
import React from "react"

const Footer = () => {
  return (
    <div className="bg-black p-10 py-16 flex gap-32">
      <div>
        <h3 className="text-2xl">Navigation</h3>
        <ul className="flex flex-col items-start py-2 text-gray-400">
          {navLinks.map((link) => (
            <li key={link.title} className="py-2">
              <Link href={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-2xl">Info</h3>
        <ul className="flex flex-col items-start py-2 text-gray-400">
          <li className="py-2">+48 123 456 789</li>
          <li className="py-2">info@agency.com</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
