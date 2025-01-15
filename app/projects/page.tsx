"use client"
import Navbar from "@/components/nav";
import { flower } from "@/components/flowers";



export default function Home() {
  const canvasRef = flower();
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
              Under Construction
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
