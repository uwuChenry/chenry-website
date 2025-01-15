"use client"
import Navbar from "@/components/nav";
import React, { useEffect, useRef } from "react";




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
    let mouseY = 0;
    function touchHandler(e: MouseEvent | TouchEvent) {
      if (e instanceof MouseEvent) {
        mouseY = e.clientY / window.innerHeight;
        mouseX = e.clientX / window.innerWidth;
      } else if (e instanceof TouchEvent) {
        mouseY = e.touches[0].clientY / window.innerHeight;
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
        this.x += this.xSpeed + mouseX * 5;
        this.y += this.ySpeed + mouseY * 3;
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
  return (
    <div className="max-w-2xl w-full">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
      <div className="w-full">
        <div className="min-h-screen">
          <div className="flex flex-row justify-between">
            <div>
              <p className="text-mygreen text-2xl font-semibold">Henry Chen</p>
            </div>
            <Navbar />
          </div>
          <div className="flex flex-col pt-10">
            <p className="text-mygreen text-xl font-semibold">
              Education
            </p>
            <div className="flex flex-row justify-between pt-5">
              <div>
                <p className="font-semibold">
                  Georgia Institute of Technology
                </p>
                <p className="text-gray-600">
                  B.S. in Computer Engineering, GPA 4.0
                </p>
              </div>
              <div className="flex flex-col justify-end text-right">
                <p>Aug 2024-Present</p>
                <p>Expected Graduation, May 2027</p>
              </div>
            </div>
            <p className="text-mygreen text-xl font-semibold pt-10">
              Projects
            </p>
            <div className="flex flex-row justify-between pt-5">
              <div>
                <p className="font-semibold">
                  Vex Robotics Team 980s
                </p>
                <p className="text-gray-600">
                  Captain, Robot Designer, Programmer
                </p>
              </div>
              <div className="text-right">
                <p>Aug 2018 - Jun 2022</p>
              </div>
            </div>
            <div>
              <ul className="list-disc pl-5">
                <li>
                  Implemented motion profiling with feedforward velocity control, boosting movement accuracy by 99.5% and reliability by 80%, achieving an 80% improvement in smoothness compared to traditional PID control.
                </li>
                <li>
                  Developed a library of 6+ autonomous control algorithms, including odometry and path tracking, using embedded C++ and OOP, reducing programming time by 60%
                </li>
                <li>
                  Enhanced performance and reliability by utilizing RTOS-based multi-threading, finite state machines, and mutexes for concurrent robot subsystem control, eliminating race conditions
                </li>
                <li>
                  2022 VEX Worlds Championship Divisional Tournament Champion, Amaze Award
                </li>
              </ul>
            </div>
            <div className="flex flex-row justify-between pt-5">
              <div>
                <p className="font-semibold">
                  Drone Assisted Water Sampling
                </p>
                <p className="text-gray-600">
                  Researcher
                </p>
              </div>
              <div className="text-right">
                <p>Sep 2022 - Jun 2023</p>
              </div>
            </div>
            <div>
              <ul className="list-disc pl-5">
                <li>
                  Developed a 3D-printed quadcopter with a retractable water collection payload, enabling targeted sampling at specific depths and GPS locations, reducing water sampling time by up to 50%
                </li>
                <li>
                  2023 Macronix Science Fair Honorable Mention Award
                </li>
              </ul>
            </div>
            <p className="text-mygreen text-xl font-semibold pt-10">
              Experience
            </p>
            <div className="flex flex-row justify-between pt-5">
              <div>
                <p className="font-semibold">
                  Skywalker Robotics 
                </p>
                <p className="text-gray-600">
                  Founder
                </p>
              </div>
              <div className="text-right">
                <p>Aug 2018 - Present</p>
              </div>
            </div>
            <div>
              <ul className="list-disc pl-5">
                <li>
                  Developed a 3D-printed quadcopter with a retractable water collection payload, enabling targeted sampling at specific depths and GPS locations, reducing water sampling time by up to 50%
                </li>
                <li>
                  2023 Macronix Science Fair Honorable Mention Award
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
