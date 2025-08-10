import React from 'react';
import PixelCard from '../React Bits Components/PixelCard';
import ProjectCard from '../Cards/ProjectCard';

const projects = [
  {
    title: "Real Time Object Detection",
    description: "A project that uses computer vision to detect objects in real time.",
    tech: ["React", "TensorFlow", "FastAPI"],
    link: "https://github.com/yourusername/realtime-object-detection",
    variant: "pink",
    bubble: { size: "w-72 h-72", color: "rgba(236,72,153,0.25)", animation: "animate-bubble1", position: "top-20 left-10" }
  },
  {
    title: "AI Chatbot",
    description: "Conversational AI assistant powered by NLP models.",
    tech: ["React", "OpenAI API", "FastAPI"],
    link: "https://github.com/yourusername/ai-chatbot",
    variant: "yellow",
    bubble: { size: "w-96 h-96", color: "rgba(59,130,246,0.25)", animation: "animate-bubble2", position: "bottom-10 right-10" }
  },
  {
    title: "Predictive Analytics Dashboard",
    description: "Data visualization and prediction dashboard.",
    tech: ["Python", "Plotly", "FastAPI"],
    link: "https://github.com/yourusername/predictive-dashboard",
    variant: "blue",
    bubble: { size: "w-48 h-48", color: "rgba(34,197,94,0.2)", animation: "animate-bubble3", position: "top-1/3 right-1/4" }
  },
  {
    title: "ML Model Deployment",
    description: "Deploying machine learning models with FastAPI.",
    tech: ["FastAPI", "Docker", "AWS"],
    link: "https://github.com/yourusername/ml-deployment",
    variant: "purple",
    bubble: { size: "w-28 h-28", color: "rgba(253,224,71,0.15)", animation: "animate-bubble4", position: "bottom-1/4 left-1/3" }
  },
  {
    title: "Image Classification API",
    description: "Image classification service with REST API.",
    tech: ["FastAPI", "TensorFlow", "React"],
    link: "https://github.com/yourusername/image-classification-api",
    variant: "red",
    bubble: { size: "w-16 h-16", color: "rgba(251,113,133,0.2)", animation: "animate-bubble6", position: "bottom-1/3 right-1/2" }
  }
];

const Projects = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />

      {/* Bubbles (mapped from array) */}
      {projects.map((proj, index) => (
        <div
            key={`bubble-${index}`}
            className={`absolute ${proj.bubble.position} ${proj.bubble.size} rounded-full ${proj.bubble.animation}`}
            style={{
            background: `radial-gradient(circle at center, ${proj.bubble.color}, transparent)`,
            }}
        />
        ))}


      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Section Heading */}
      <div className="relative text-center mb-12 z-10">
        <h2 className="text-4xl font-bold text-white">Projects</h2>
        <p className="mt-2 text-gray-300 max-w-xl">
          A collection of my AI, ML, and Fullstack works that blend technology with creativity.
        </p>
      </div>

      {/* Cards (mapped from array) */}
      <div className="relative z-10 flex flex-wrap justify-center gap-6 max-w-7xl">
        {projects.map((proj, index) => (
          <PixelCard
            key={`card-${index}`}
            variant={proj.variant}
            className="transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <ProjectCard
              title={proj.title}
              description={proj.description}
              tech={proj.tech}
              link={proj.link}
            />
          </PixelCard>
        ))}
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes bubbleFloat1 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(30px, -20px); }
}
@keyframes bubbleFloat2 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-30px, 20px); }
}
@keyframes bubbleFloat3 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(15px, 25px); }
}
@keyframes bubbleFloat4 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-20px, -15px); }
}
@keyframes bubbleFloat5 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(10px, -10px); }
}
@keyframes bubbleFloat6 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-10px, 15px); }
}

.animate-bubble1 { animation: bubbleFloat1 12s ease-in-out infinite; }
.animate-bubble2 { animation: bubbleFloat2 15s ease-in-out infinite; }
.animate-bubble3 { animation: bubbleFloat3 18s ease-in-out infinite; }
.animate-bubble4 { animation: bubbleFloat4 10s ease-in-out infinite; }
.animate-bubble5 { animation: bubbleFloat5 8s ease-in-out infinite; }
.animate-bubble6 { animation: bubbleFloat6 6s ease-in-out infinite; }

      `}</style>
    </section>
  );
};

export default Projects;
