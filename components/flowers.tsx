"use client";
import { useEffect, useRef } from "react";

export function flower(){
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
        // petalImg.src = "https://djjjk9bjm164h.cloudfront.net/petal.png";
        petalImg.src = "/petal.png";
    
        let mouseX = 0.6;
        let mouseY = 0.2;
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
    return canvasRef;
}