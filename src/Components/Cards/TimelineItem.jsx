import React from "react";

const TimelineItem = ({ year, title, institution, marks, highlights }) => {
    return(
  <div className="relative pl-10 pb-10">
    {/* Connector Line */}
    <div className="absolute left-3 top-0 w-[2px] h-full bg-gradient-to-b from-pink-500 via-blue-500 to-purple-500" />

    {/* Circle */}
    <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 border-2 border-white animate-pulse" />

    {/* Content */}
    <div className="bg-gray-900/60 border border-gray-700 rounded-lg p-4 shadow-lg hover:shadow-[0_0_15px_#6f69ff] transition-all">
      <span className="text-sm text-pink-400 font-semibold">{year}</span>
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="text-gray-300">{institution}</p>
      {marks && <p className="text-blue-400 font-medium">Marks: {marks}</p>}
      <ul className="list-disc list-inside text-gray-400 text-sm mt-2 space-y-1">
        {highlights.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  </div>
  );
};

export default TimelineItem;