import React from 'react'
import Link from 'next/link'
import Logo from "./Logo.jsx"

const navItems = [
  { href: "/about", label: "About" },
  { href: "/members", label: "Members" },
  { href: "/gallery", label: "Gallery" },
];


function navbar() {
return (
    <header className="fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out text-white bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            <div className="flex items-center h-16">
                <Logo />
            </div>

            <nav className="flex items-center space-x-6 justify-end h-16">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`text-sm font-medium hover:text-grey ${item.specialPadding ? "px-5" : "px-2 lg:px-5"} h-full flex items-center justify-center transition duration-150 ease-in-out text-center`}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </div>
    </header>
)
}

export default navbar