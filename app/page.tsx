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
                <a href="/projects" className="font-semibold hover:text-mygreen transition-colors duration-300">Vex Robotics Team 980s</a>
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
                <a href="https://skywalker.best" target="_blank" className="font-semibold hover:text-mygreen transition-colors duration-300">Skywalker Robotics</a>
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
                  Established a community-based club for motivated teenagers without access to robotics in school in New Zealand.
                </li>
                <li>
                  Hosted 7 outreach workshops with 1000+ attendees to promote STEM Education in New Zealand.
                </li>
                <li>
                  Taught 650+ hrs of CAD & programming, provided troubleshooting consultation and competition tips to teams in New Zealand, Taiwan, Australia and United States both in person and online.
                </li>
                <li>
                  Mentored 10+ teams, leading to a score increase of 150% and qualifying to the Vex World Championship 6 times.
                </li>
              </ul>
            </div>



            <p className="text-mygreen text-xl font-semibold pt-10">
              Activities & Leadership
            </p>
            <div className="flex flex-row justify-between pt-5">
              <div>
                <p className="font-semibold">
                  RoboRacing @ GT RoboJackets
                </p>
                <p className="text-gray-600">
                  Software Team
                </p>
              </div>
              <div className="text-right">
                <p>Jan 2025 - Present</p>
              </div>
            </div>
            <div>
              <ul className="list-disc pl-5">
                <li>
                  Developed and tested autonomous navigation algorithms in a simulated F1TENTH environment using ROS2 in Docker on Linux. Implemented SLAM and a wall-following controller, visualized results in RViz, and began integrating RRT and pure pursuit for improved path planning and tracking.
                </li>
              </ul>
            </div>
            <div className="flex flex-row justify-between pt-5">
              <div>
                <p className="font-semibold">
                  GT Medical Robotics
                </p>
                <p className="text-gray-600">
                  Software Team
                </p>
              </div>
              <div className="text-right">
                <p>Aug 2024 - Jan 2025</p>
              </div>
            </div>
            <div>
              <ul className="list-disc pl-5">
                <li>
                  Implemented a Mediapipe-based Python pipeline to extract hand landmarks and convert them into arrays of joint curvature values representing hand openness. Collaborated on mapping these gestures to EMG signals as a first step toward translating muscle activity into prosthetic hand motor commands.
                </li>
              </ul>
            </div>
            <div className="flex flex-row justify-between pt-5">
              <div>
                <p className="font-semibold">
                  FRC Team 7130 @ MDHS
                </p>
                <p className="text-gray-600">
                  Technical Captain, Programming Leader
                </p>
              </div>
              <div className="text-right">
                <p>Feb 2022 - Feb 2024</p>
              </div>
            </div>
            <div>
              <ul className="list-disc pl-5">
                <li>
                  Led a 15-member software team, mentoring in embedded programming, and contributed to subsystem integration, drivetrain, and intake design, ensuring seamless control and programming alignment.
                </li>
                <li>
                  Designed, built, and tested a 120-pound competition robot in six weeks, implementing inverse kinematics and gyroscope-based orientation control to enable omnidirectional movement and precise navigation in dynamic environments.
                </li>
                {/* <li>
                  Designed, built, and tested a 120-pound competition robot in six weeks, implementing control algorithms and computer vision localization using April Tags.
                </li> */}
                {/* <li>
                  Organized STEM outreach initiatives, including fairs for 7,000+ students and regional scrimmages, promoting education and engagement.
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
