"use client"
import Navbar from "@/components/nav";
import React, { useState , useEffect, useRef } from "react";
import { usePathname } from 'next/navigation';

const hoverStyle = {
  textDecoration: "underline",
  textUnderlineOffset: "0.4em",
  textDecorationThickness: 1.5,
  textDecorationColor: "#248232"
}

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {

    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    const TOTAL = 20;
    const petalArray: Petal[] = [];

    const petalImg = new window.Image();
    petalImg.src = "https://djjjk9bjm164h.cloudfront.net/petal.png";

    let mouseX = 0;
    function touchHandler(e: MouseEvent | TouchEvent) {
      if (e instanceof MouseEvent) {
      mouseX = e.clientX / window.innerWidth;
      } else if (e instanceof TouchEvent) {
      mouseX = e.touches[0].clientX / window.innerWidth;
      }
    }
    window.addEventListener("mousemove", touchHandler);
    window.addEventListener("touchmove", touchHandler);

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    class Petal {
      x: number = 0;
      y: number = 0;
      w: number = 0;
      h: number = 0;
      opacity: number = 0;
      flip: number = 0;
      xSpeed: number = 0;
      ySpeed: number = 0;
      flipSpeed: number = 0;
      constructor() {
        this.reset();
      }

      reset() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width / 5;
        this.y = Math.random() * canvas.height * 2 - canvas.height;
        this.w = 15 + Math.random() * 15;
        this.h = 20 + Math.random() * 10;
        this.opacity = this.w / 40;
        this.flip = Math.random();
        this.xSpeed = 1.5 + Math.random() * 2;
        this.ySpeed = 1 + Math.random() * 1;
        this.flipSpeed = Math.random() * 0.03;
      }

      draw() {
        if (!canvas) return;
        if (this.y > canvas.height || this.x > canvas.width) {
          this.reset();
        }
        if (!ctx) return;
        ctx.globalAlpha = this.opacity;
        ctx.drawImage(
          petalImg,
          this.x,
          this.y,
          this.w * (0.6 + Math.abs(Math.cos(this.flip)) / 3),
          this.h * (0.8 + Math.abs(Math.sin(this.flip)) / 5)
        );
      }

      animate() {
        this.x += this.xSpeed + mouseX * 4/3;
        this.y += this.ySpeed + mouseX * 3/3;
        // this.x += this.xSpeed;
        // this.y += this.ySpeed;
        this.flip += this.flipSpeed;
        this.draw();
      }
    }

    petalImg.onload = () => {
      for (let i = 0; i < TOTAL; i++) {
        petalArray.push(new Petal());
      }
      render();
    };

    function render() {
      if (!canvas) return;
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      petalArray.forEach((petal) => petal.animate());
      requestAnimationFrame(render);
    }
  }, []);
  const [hovered, setHovered] = useState<string>();
  return (
    <div className="max-w-2xl w-full">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-screen -z-10"
      />
      <div className="w-full">
        <div className="min-h-screen">
          <div className="flex flex-row justify-between">
            <div>
              <p className="text-mygreen text-xl font-semibold">Henry Chen</p>
            </div>
            <Navbar />
          </div>
          <div className="flex flex-col">
            <div className="font-bold pt-10 pb-3 text-mygreen tracking-widest text-lg">
              Hi, 你好, Kia ora!
            </div>
            <p className="text-mygreen-light">[ He/him ]</p>
            <div className="">
              <p className="pt-5">I'm Henry and I'm a Taiwanese Kiwi studying at Georgia Tech majoring in Computer Engineering. </p>
              <p className="pt-5">For eight years, I have participated in robotics competitions and gained extensive experience in designing robots and developing robotics algorithms for time-critical systems. In addition, I have honed my skills in leadership, teamwork, project management, event organization and mentoring. </p>
              <p className="pt-5">Providing educational opportunities for robotics in New Zealand has been a mission for me due to the lack of resources when I was starting out. I founded Skywalker Robotics in 2019 to create a place for passionate students that wanted to improve their skills in robotics through a variety of different robotic competitions such as FLL, VRC and Vex IQ. Outside of Skywalker Robotics              </p>
              <p className="pt-5">Throughout the years, I've found my passion for robotics and I hope to continue pursuing my passion for my career in fields such as planning, controls, computer vision as well as low level programming and embedded systems.              </p>
              <p className="pt-5">Feel free to contact me <a href="mailto:pchen432@gatech.edu" className="underline hover:text-mygreen">here</a>. I look forward to meeting passionate like-minded peers and professionals.</p>
            </div>
            <div>
              <ul className="pt-10 flex flex-row" > 
                <a href="https://github.com/uwuChenry" className="pr-5" onMouseEnter={() => setHovered("github")} onMouseLeave={() => setHovered(undefined)}>
                  <img src="/github.svg" alt="github" width={30} height={30} style={{ filter: hovered === "github" ? 'none' : 'grayscale(100%) brightness(0) invert(0.5)' }}/>
                </a>

                <a href="https://www.linkedin.com/in/henry-chen-980s/"className="pr-5" onMouseEnter={() => setHovered("linkedin")} onMouseLeave={() => setHovered(undefined)}>
                  <img src="/linkedin.svg" alt="linkedin" width={30} height={30} style={{ filter: hovered === "linkedin" ? 'none' : 'grayscale(100%) brightness(0) invert(0.5)' }}/>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
