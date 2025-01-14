"use client"
import Navbar from "@/components/nav";
import React, {useEffect, useRef } from "react";




export default function Home() {
  // const canvasRef = useRef<HTMLCanvasElement>(null);
  // useEffect(() => {
    
  //   const canvas = canvasRef.current;
  //   if (!canvas) return;
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;
  //   const ctx = canvas.getContext("2d");

  //   const TOTAL = 20;
  //   const petalArray: Petal[] = [];

  //   const petalImg = new window.Image();
  //   petalImg.src = "https://djjjk9bjm164h.cloudfront.net/petal.png";

  //   let mouseX = 0;
  //   function touchHandler(e: MouseEvent | TouchEvent) {
  //     if (e instanceof MouseEvent) {
  //     mouseX = e.clientX / window.innerWidth;
  //     } else if (e instanceof TouchEvent) {
  //     mouseX = e.touches[0].clientX / window.innerWidth;
  //     }
  //   }
  //   window.addEventListener("mousemove", touchHandler);
  //   window.addEventListener("touchmove", touchHandler);

  //   window.addEventListener("resize", () => {
  //     canvas.width = window.innerWidth;
  //     canvas.height = window.innerHeight;
  //   });

  //   class Petal {
  //     x: number = 0;
  //     y: number = 0;
  //     w: number = 0;
  //     h: number = 0;
  //     opacity: number = 0;
  //     flip: number = 0;
  //     xSpeed: number = 0;
  //     ySpeed: number = 0;
  //     flipSpeed: number = 0;
  //     constructor() {
  //       this.reset();
  //     }

  //     reset() {
  //       if (!canvas) return;
  //       this.x = Math.random() * canvas.width / 5;
  //       this.y = Math.random() * canvas.height * 2 - canvas.height;
  //       this.w = 15 + Math.random() * 15;
  //       this.h = 20 + Math.random() * 10;
  //       this.opacity = this.w / 40;
  //       this.flip = Math.random();
  //       this.xSpeed = 1.5 + Math.random() * 2;
  //       this.ySpeed = 1 + Math.random() * 1;
  //       this.flipSpeed = Math.random() * 0.03;
  //     }

  //     draw() {
  //       if (!canvas) return;
  //       if (this.y > canvas.height || this.x > canvas.width) {
  //         this.reset();
  //       }
  //       if (!ctx) return;
  //       ctx.globalAlpha = this.opacity;
  //       ctx.drawImage(
  //         petalImg,
  //         this.x,
  //         this.y,
  //         this.w * (0.6 + Math.abs(Math.cos(this.flip)) / 3),
  //         this.h * (0.8 + Math.abs(Math.sin(this.flip)) / 5)
  //       );
  //     }

  //     animate() {
  //       this.x += this.xSpeed + mouseX * 4/3;
  //       this.y += this.ySpeed + mouseX * 3/3;
  //       // this.x += this.xSpeed;
  //       // this.y += this.ySpeed;
  //       this.flip += this.flipSpeed;
  //       this.draw();
  //     }
  //   }

  //   petalImg.onload = () => {
  //     for (let i = 0; i < TOTAL; i++) {
  //       petalArray.push(new Petal());
  //     }
  //     render();
  //   };

  //   function render() {
  //     if (!canvas) return;
  //     if (!ctx) return;
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);
  //     petalArray.forEach((petal) => petal.animate());
  //     requestAnimationFrame(render);
  //   }
  // }, []);
  return (
    <div className="max-w-2xl w-full">
      {/* <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-screen -z-10"
      /> */}
      <div className="w-full">
        <div className="min-h-screen">
          <div className="flex flex-row justify-between">
            <div>
              <p>Henry Chen</p>
            </div>
            <Navbar />
          </div>
          <div className="flex flex-col">
            <div>
              <p>Experience</p>
            </div>
            <div>
              <p>Education</p>
            </div>
            <div>
              <p>Skills</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
    //           app/page.tsx
    //         </code>
    //         .
    //       </li>
    //       <li>Save and see your changes instantly.</li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
  );
}
