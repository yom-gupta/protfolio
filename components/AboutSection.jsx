"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const skills = [
  { name: "Video Editing", percentage: 95 },
  { name: "Thumbnail Design", percentage: 90 },
  { name: "Motion Graphics", percentage: 85 },
  { name: "Color Grading", percentage: 88 },
  { name: "Adobe Creative Suite", percentage: 92 },
];

export default function AboutSection() {
  const [progress, setProgress] = useState(skills.map(() => 0));
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setProgress((prev) => {
                const newProgress = [...prev];
                newProgress[index] = skill.percentage;
                return newProgress;
              });
            }, index * 300);
          });
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("about-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="about-section" className="pt-20 pb-0 bg-black">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-10 lg:items-center">

          <div className="w-full lg:w-5/12 flex mt-10 lg:mt-0">
            <div className="img-about w-full flex items-stretch rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-md bg-black/30 border border-white/10">
              <div className="overlay p-6 about-card w-full">

                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-full sm:w-5/12 mx-auto sm:mx-0 flex justify-center">
                    <div className="about-img relative w-40 h-40 sm:w-full sm:h-auto overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src="/img/Designer_1_ins.webp"
                        alt="Rishabh Gupta"
                        width={200}
                        height={200}
                        className="object-cover w-full h-full"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>

                  <div className="w-full sm:w-7/12 flex items-center">
                    <div className="about-info text-white ml-0 sm:ml-4 space-y-3 w-full">
                      <p><span className="font-bold text-primary mr-2">Name:</span> Rishabh Gupta</p>
                      <p><span className="font-bold text-primary mr-2">Profile:</span> Video Editor & Designer</p>
                      <p><span className="font-bold text-primary mr-2">Experience:</span> 2+ Years</p>
                      <p><span className="font-bold text-primary mr-2">Location:</span> Delhi, India</p>
                    </div>
                  </div>
                </div>

                <div className="skill-mf mt-8">
                  <p className="font-bold text-xl text-white mb-4">Skills</p>
                  {skills.map((skill, index) => (
                    <div className="mb-4" key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-white text-sm">{skill.name}</span>
                        <span className="text-primary text-sm font-semibold">{progress[index]}%</span>
                      </div>
                      <div className="progress rounded-full overflow-hidden">
                        <div
                          className="progress-bar rounded-full"
                          role="progressbar"
                          style={{ width: `${progress[index]}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12 about-container pl-0 lg:pl-10">
            <div className="relative pb-3 mb-8">
              <h1 className="projects-bg opacity-10 top-0 left-0 lg:left-[-10%] whitespace-nowrap hidden sm:block">ABOUT</h1>
              <h2 className="mb-6 text-white text-3xl md:text-4xl font-bold relative z-10 text-center lg:text-left">About Me</h2>
              <p className="text-gray-300 text-lg sm:text-left text-center">
                I'm a professional video editor and thumbnail designer with over 2 years of experience in creating engaging content. I specialize in:
              </p>

              <ul className="about-info mt-7 space-y-4 text-gray-300">
                <li className="flex flex-col sm:flex-row">
                  <span className="font-bold text-primary mr-2 shrink-0">Video Editing:</span>
                  <span>Professional editing, color grading, and motion graphics</span>
                </li>
                <li className="flex flex-col sm:flex-row">
                  <span className="font-bold text-primary mr-2 shrink-0">Thumbnail Design:</span>
                  <span>Eye-catching thumbnails that drive clicks</span>
                </li>
                <li className="flex flex-col sm:flex-row">
                  <span className="font-bold text-primary mr-2 shrink-0">Tools:</span>
                  <span>Adobe Premiere Pro, After Effects, Photoshop</span>
                </li>
                <li className="flex flex-col sm:flex-row">
                  <span className="font-bold text-primary mr-2 shrink-0">Expertise:</span>
                  <span>YouTube content, social media videos, promotional content</span>
                </li>
              </ul>
            </div>

            <div className="mt-12 text-center lg:text-left">
              <div className="btn-container inline-block">
                <Link
                  href="#video-section"
                  className="button"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#video-section")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  View Portfolio
                  <div className="image-container pointer-events-none">
                    <Image
                      src="/img/btn_img.webp"
                      alt="Portfolio Preview"
                      width={100}
                      height={100}
                      style={{
                        transform: `scale(${isHovered ? 1 : 0.5}) translateY(${isHovered ? '0%' : '80%'})`,
                        opacity: isHovered ? 1 : 0,
                        transition: "transform 0.5s ease, opacity 0.8s ease"
                      }}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
