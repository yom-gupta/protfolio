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
      { threshold: 0.2 }
    );

    const section = document.getElementById("about-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="about-section" className="pt-16 md:pt-20 pb-0 bg-black">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 lg:items-center">

          <div className="w-full lg:w-5/12 flex mt-6 lg:mt-0">
            <div className="img-about w-full flex items-stretch rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-md bg-black/30 border border-white/10">
              <div className="overlay p-4 sm:p-6 about-card w-full">

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="w-full sm:w-5/12 mx-auto sm:mx-0 flex justify-center">
                    <div className="about-img relative w-32 h-32 sm:w-full sm:h-auto overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src="/img/pfpf v2.jpg"
                        alt="Rishabh Gupta"
                        width={200}
                        height={200}
                        className="object-cover w-full h-full"
                        sizes="(max-width: 640px) 128px, (max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>

                  <div className="w-full sm:w-7/12 flex items-center">
                    <div className="about-info text-white ml-0 sm:ml-4 space-y-2 sm:space-y-3 w-full text-center sm:text-left">
                      <p className="text-sm sm:text-base"><span className="font-bold text-primary mr-2">Name:</span> Rishabh Gupta</p>
                      <p className="text-sm sm:text-base"><span className="font-bold text-primary mr-2">Handle:</span> @mr_yom_gupta</p>
                      <p className="text-sm sm:text-base"><span className="font-bold text-primary mr-2">Experience:</span> 2+ Years</p>
                      <p className="text-sm sm:text-base"><span className="font-bold text-primary mr-2">Location:</span> Delhi, India</p>
                      <p className="text-sm sm:text-base"><span className="font-bold text-primary mr-2">Clients:</span> 30K – 20M+ subs</p>
                    </div>
                  </div>
                </div>

                <div className="skill-mf mt-6 sm:mt-8">
                  <p className="font-bold text-lg sm:text-xl text-white mb-3 sm:mb-4">Skills</p>
                  {skills.map((skill, index) => (
                    <div className="mb-3 sm:mb-4" key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-white text-xs sm:text-sm">{skill.name}</span>
                        <span className="text-primary text-xs sm:text-sm font-semibold">{progress[index]}%</span>
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
            <div className="relative pb-3 mb-6 md:mb-8">
              <h1 className="projects-bg opacity-10 top-0 left-0 lg:left-[-10%] whitespace-nowrap hidden sm:block">ABOUT</h1>
              <h2 className="mb-4 md:mb-6 text-white text-2xl sm:text-3xl md:text-4xl font-bold relative z-10 text-center lg:text-left">About Me</h2>
              <p className="text-gray-300 text-base sm:text-lg text-center sm:text-left">
                I'm Rishabh a video editor, thumbnail designer, and creative based in Delhi, India.
                I've spent 2+ years working behind the scenes for YouTube and Instagram creators,
                helping them turn raw footage into content that actually performs.
              </p>
              <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left mt-3">
                I don't just edit videos — I think about why a viewer clicks, why they stay, and why
                they come back. That's what drives every cut, every color grade, and every thumbnail I make.
                I've collaborated with creators ranging from 30K to 20M+ subscribers across niches like
                fitness, health, tech, education, and lifestyle.
              </p>

              <ul className="about-info mt-5 sm:mt-7 space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
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

            <div className="mt-8 md:mt-12 text-center lg:text-left">
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
