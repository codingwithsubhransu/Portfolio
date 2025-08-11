import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const skillCategories = {
  frontend: [
    { name: "React", level: 50 },
    { name: "Tailwind CSS", level: 65 },
    { name: "JavaScript", level: 78 },
  ],
  backend: [
    { name: "Django", level: 80 },
    { name: "FastAPI", level: 75 },
    { name: "sqlite", level: 78 },
  ],
  ai: [
    { name: "Python", level: 85 },
    { name: "TensorFlow", level: 70 },
    { name: "Scikit-learn", level: 75 },
  ],
  tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "VS Code", level: 95 },
    { name: "Figma", level: 80 },
  ],
  devops: [
    { name: "Docker", level: 80 },
    { name: "AWS", level: 75 },
  ]
};

const categoryColors = {
  frontend: ["#ec4899", "#8b5cf6", "#3b82f6"],
  backend: ["#22c55e", "#16a34a", "#15803d"],
  ai: ["#facc15", "#f59e0b", "#d97706"],
  tools: ["#06b6d4", "#0ea5e9", "#0284c7"],
  devops: ["#f43f5e", "#fb7185", "#e11d48"]
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const skills = skillCategories[activeCategory];

  // Chart.js Data
  const chartData = {
    labels: skills.map(s => s.name),
    datasets: [
      {
        data: skills.map(s => s.level),
        backgroundColor: categoryColors[activeCategory],
        borderWidth: 0
      }
    ]
  };

  const chartOptions = {
    plugins: {
      legend: { display: false }
    },
    cutout: "70%"
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black animate-pulse-slow"></div>
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl">
        <h2 className="text-4xl font-bold text-white text-center mb-2">Skills</h2>
        <p className="text-gray-300 text-center mb-8">
          A snapshot of my technical skills, tools, and expertise.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {Object.keys(skillCategories).map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 capitalize ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              {cat.replace("_", " ")}
            </button>
          ))}
        </div>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Progress Bars */}
          <div>
            {skills.map((skill, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-white">{skill.name}</span>
                  <span className="text-gray-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      background: `linear-gradient(to right, ${categoryColors[activeCategory][0]}, ${categoryColors[activeCategory][1]})`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Donut Chart */}
          <div className="flex justify-center items-center">
            <div className="w-64 h-64">
              <Doughnut data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
