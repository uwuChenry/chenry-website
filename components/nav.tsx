"use client"

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';


const hoverStyle = {
    textDecoration: "underline",
    textUnderlineOffset: "0.4em",
    textDecorationThickness: 1.5,
    textDecorationColor: "#248232"
}

function Navbar() {
    const pathname = usePathname();
    console.log(pathname)

    const [hovered, setHovered] = useState<string>();

    return (
        <ul className="flex flex-col justify-end gap-1" onMouseLeave={() => setHovered(undefined)}>
            <li className={`relative text-right ${pathname === '/' ? 'text-mygreen' : 'text-black'}`}
                onMouseEnter={() => setHovered("experience")}
                style={hovered === "experience" ? hoverStyle : undefined}>
                <Link href="/">Experience</Link>
            </li>
            <li className={`text-right ${pathname === '/about' ? 'text-mygreen' : 'text-black'}`}
                onMouseEnter={() => setHovered("about")}
                style={hovered === "about" ? hoverStyle : undefined}>
                <Link href="/about">About</Link>
            </li>
            <li className={`text-right ${pathname === '/projects' ? 'text-mygreen' : 'text-black'}`}
                onMouseEnter={() => setHovered("projects")}
                style={hovered === "projects" ? hoverStyle : undefined}>
                <Link href="/projects">Projects</Link>
            </li>
            <li className={`flex flex-row items-center ${pathname === '/resume' ? 'text-mygreen' : 'text-mygray'} hover:text-black`}
                onMouseEnter={() => setHovered("resume")}
                style={hovered === "resume" ? hoverStyle : undefined}>
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <p className="text-right pr-1">Resume</p>
                    <Image src="/resume.svg" alt="Download resume" className="w-5 h-5" style={{ filter: hovered === "resume" ? 'none' : 'grayscale(100%) brightness(0) invert(0.7)' }} />
                </Link>
            </li>
        </ul>
    );
}

export default Navbar;