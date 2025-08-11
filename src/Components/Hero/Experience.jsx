import React, { useState } from "react";
import TimelineItem from "../Cards/TimelineItem";
import Particles from "../React Bits Components/Particles";

const academicData = [
  {
    year: "2023",
    title: "B.Tech in Computer Science",
    institution: "ABC Institute of Technology",
    marks: "8.9 CGPA",
    highlights: [
      "Specialized in AI/ML",
      "Capstone project in real-time object detection",
    ],
  },
  {
    year: "2019",
    title: "Higher Secondary (12th Grade)",
    institution: "XYZ Senior Secondary School",
    marks: "92%",
    highlights: ["PCM Stream", "School coding club president"],
  },
  {
    year: "2017",
    title: "Secondary (10th Grade)",
    institution: "XYZ High School",
    marks: "95%",
    highlights: ["Top 3 in science exhibition"],
  },
];

const professionalData = [
  {
    year: "Upcoming",
    title: "Future AI/ML Engineer",
    institution: "To Be Announced",
    marks: null,
    highlights: [
      "Currently building portfolio projects",
      "Open to exciting opportunities",
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState("academic");

  const dataToShow = activeTab === "academic" ? academicData : professionalData;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-28">
      {/* Particle Background */}
      <div className="absolute inset-0 -z-10">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
        {/* Dark overlay to make content pop */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center text-white mb-10">
        <h2 className="text-4xl font-bold mb-4">Experience</h2>
        <p className="max-w-xl text-gray-300 mx-auto">
          A journey through my academic achievements and future professional path.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10 z-10">
        <button
          onClick={() => setActiveTab("academic")}
          className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
            activeTab === "academic"
              ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
              : "bg-gray-800 text-gray-400 hover:text-white"
          }`}
        >
          🎓 Academic
        </button>
        <button
          onClick={() => setActiveTab("professional")}
          className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
            activeTab === "professional"
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
              : "bg-gray-800 text-gray-400 hover:text-white"
          }`}
        >
          💼 Professional
        </button>
      </div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto relative z-10 pb-20">
        {dataToShow.map((item, idx) => (
          <TimelineItem key={idx} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
