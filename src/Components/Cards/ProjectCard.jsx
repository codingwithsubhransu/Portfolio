import React from "react";

const ProjectCard = ({ title, description, tech, link }) => {
  return (
    <div className="bg-transparent rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow duration-300 absolute text-center flex flex-col gap-5">
      <h3 className="text-lg font-semibold text-gray-100 mb-2">{title}</h3>
      <p className="text-sm text-gray-200 mb-4">{description}</p>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {tech.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Call to Action */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-md font-medium text-blue-400 hover:underline border-white border-2 px-3 py-1 rounded-full transition-colors duration-300 hover:bg-indigo-600 hover:text-white "
      >
        View Project →
      </a>
    </div>
  );
};

export default ProjectCard;
