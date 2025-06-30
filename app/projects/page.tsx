"use client"
import Navbar from "@/components/nav";
import { flower } from "@/components/flowers";
import Image from "next/image";
import { useState } from "react";



export default function Home() {
  const canvasRef = flower();
  const [isExpanded, setIsExpanded] = useState(false);
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
            <div className="font-bold pt-10 pb-8 text-mygreen tracking-widest text-3xl">
              Projects
            </div>
            
            <div className="space-y-8 text-gray-800 leading-relaxed">
              {/* Main Project Title */}
              <div className="border border-gray-200 rounded-lg p-6 bg-white bg-opacity-30 shadow-md">
                <div 
                  className="cursor-pointer flex justify-between items-center"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  <h2 className="text-2xl font-bold text-mygreen">
                    Precision Motion Profiling for Competitive Robotics
                  </h2>
                  <span className="text-mygreen text-2xl">
                    {isExpanded ? '−' : '+'}
                  </span>
                </div>
                <p className="mt-4 text-gray-600">
                  In competitive robotics, getting a robot to move smoothly, accurately, and reliably is a core challenge—especially when traditional sensor-based PID controllers fall short.
                </p>
                
                {isExpanded && (
                  <div className="mt-6 space-y-8">
                    {/* Challenge Section */}
                    <div>
                      <h3 className="text-xl font-semibold text-mygreen mb-3">
                        Challenge and Initial Approach
                      </h3>
                      <p>
                        In VEX robotics competitions, achieving precise and accurate robot movement was a persistent challenge. The standard method involved using PID controllers with sensors like wheel encoders to drive motors toward target values. However, this approach lacked smoothness due to its reactive nature, relying solely on sensor feedback without considering the robot&apos;s physical limits, leading to jerky motions.
                      </p>
                    </div>

                    {/* Solution Section */}
                    <div>
                      <h3 className="text-xl font-semibold text-mygreen mb-3">
                        Developing a Solution: Open-Loop Motion Profiles
                      </h3>
                      <p>
                        To address these issues, I implemented open-loop motion profiles, which preplan robot movements based on physical constraints like maximum velocity and acceleration. This method generates smooth, repeatable trajectories that respect the robot&apos;s physical limits. The velocity curve resembled a trapezoid, optimizing speed and ensuring accuracy through controlled motion.
                      </p>
                    </div>

                    {/* Custom Controller Section */}
                    <div>
                      <h3 className="text-xl font-semibold text-mygreen mb-3">
                        Enhancing Control with Custom Velocity Controllers
                      </h3>
                      <p>
                        Accurate velocity tracking was crucial for following the motion profile. The built-in VEX PID controller proved inadequate, as it wasn&apos;t optimized for our robot. I designed a custom controller incorporating feedforward control based on target velocity and acceleration, alongside feedback mechanisms for self-correction. This significantly improved tracking accuracy, achieving smooth, precise movements.
                      </p>
                      
                      <Image src="/ffvspid.png" alt="Custom Velocity Controller" width={400} height={1000} className="mt-4 mx-auto" />
                      <Image src="/trape with ff.png" alt="Custom Velocity Controller" width={400} height={1000} className="mt-4 mx-auto" />
                      <Image src="/trape with ff with lower max vel.png" alt="Custom Velocity Controller" width={400} height={1000} className="mt-4 mx-auto" />
                    </div>

                    {/* S-Curve Section */}
                    <div>
                      <h3 className="text-xl font-semibold text-mygreen mb-3">
                        Refinement: Transition to S-Curve Motion Profiles
                      </h3>
                      <p>
                        When translating the algorithm to C++ for the VEX robot, I noticed deviations from the desired velocity profile, particularly near top speeds. Research revealed that the torque of DC motors decreases as speed increases due to the relationship with back EMF. While reducing the maximum velocity improves the ability to track the target velocity, we are sacrificing maximum speed and can be disadvantageous when travelling longer distances. The solution was adopting an s-curve motion profile, which introduces jerk constraints (the derivative of acceleration). This adjustment smooths acceleration changes, better aligning with the motor&apos;s physical behavior. Hardware in the loop testing confirmed improved performance.
                      </p>
                      <Image src="/scurve vel.png" alt="Custom Velocity Controller" width={400} height={1000} className="mt-4 mx-auto" />
                      <Image src="/scurve pos.png" alt="Custom Velocity Controller" width={400} height={1000} className="mt-4 mx-auto" />
                    </div>

                    {/* Results Section */}
                    <div>
                      <h3 className="text-xl font-semibold text-mygreen mb-3">
                        Results and Impact
                      </h3>

                      <div className="">
                        <ul className="space list-disc pl-6 space-y-2">
                          <li><strong>Precision:</strong> &lt;0.3mm standard deviation over 10 trials at 1 meter</li>
                          <li><strong>Accuracy:</strong> &lt;5 mm error across 5 target distances</li>
                          <li><strong>Improvement:</strong> Traditional PID had ~20mm error and ~5mm standard deviation</li>
                        </ul>
                      </div>
                      <p className="mt-4">
                        The new system not only enhanced reliability but also delivered flawless autonomous runs during competitions—demonstrating the real-world value of model-based motion planning in robotics.
                      </p>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/99G_EouWf60?si=DhTKaQD6XHlJM9wj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="mt-4 mx-auto max-w-full"></iframe>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
