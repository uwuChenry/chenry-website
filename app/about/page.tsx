"use client"
import Navbar from "@/components/nav";
import React, { useState } from "react";
import Image from "next/image";
import { flower } from "@/components/flowers";

export default function Home() {
  const canvasRef = flower();
  const [hovered, setHovered] = useState<string>();
  return (
    <div className="max-w-2xl w-full">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10"
      />
      <div className="w-full">
        <div className="min-h-screen">
          <div className="flex flex-row justify-between">
            <div>
              <p className="text-mygreen text-2xl font-semibold">Henry Chen</p>
            </div>
            <Navbar />
          </div>
          <div className="flex flex-col">
            <div className="font-bold pt-10 pb-3 text-mygreen tracking-widest text-lg">
              Hi, 你好, Kia ora!
            </div>
            <p className="text-mygreen-light">[ He/him ]</p>
            <div className="">
              <p className="pt-5">I&apos;m Henry and I&apos;m a Taiwanese Kiwi studying at Georgia Tech majoring in Computer Engineering. </p>
              <p className="pt-5">For eight years, I have participated in robotics competitions and gained extensive experience in designing robots and developing robotics algorithms for time-critical systems. In addition, I have honed my skills in leadership, teamwork, project management, event organization and mentoring. </p>
              <p className="pt-5">Providing educational opportunities for robotics in New Zealand has been a mission for me due to the lack of resources when I was starting out. I founded Skywalker Robotics in 2019 to create a place for passionate students that wanted to improve their skills in robotics through a variety of different robotic competitions such as FLL, VRC and Vex IQ. Outside of Skywalker Robotics              </p>
              <p className="pt-5">Throughout the years, I&apos;ve found my passion for robotics and I hope to continue pursuing my passion for my career in fields such as planning, controls, computer vision as well as low level programming and embedded systems.              </p>
              <p className="pt-5">Feel free to contact me <a href="mailto:pchen432@gatech.edu" className="underline hover:text-mygreen">here</a>. I look forward to meeting passionate like-minded peers and professionals.</p>
            </div>
            <div>
              <ul className="pt-10 flex flex-row" > 
                <a href="https://github.com/uwuChenry" className="pr-5" onMouseEnter={() => setHovered("github")} onMouseLeave={() => setHovered(undefined)}>
                  <Image src="/github.svg" alt="github" width={30} height={30} style={{ filter: hovered === "github" ? 'none' : 'grayscale(100%) brightness(0) invert(0.5)' }}/>
                </a>

                <a href="https://www.linkedin.com/in/henry-chen-980s/"className="pr-5" onMouseEnter={() => setHovered("linkedin")} onMouseLeave={() => setHovered(undefined)}>
                  <Image src="/linkedin.svg" alt="linkedin" width={30} height={30} style={{ filter: hovered === "linkedin" ? 'none' : 'grayscale(100%) brightness(0) invert(0.5)' }}/>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
