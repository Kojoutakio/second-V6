import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CardProject = ({ img, title, description, id }) => {
  // Check if the img source is a video file
  const isVideo = img && (img.endsWith('.mp4') || img.endsWith('.webm') || img.endsWith('.ogg') || img.includes('video'));
  
  const handleDetails = (e) => {
    if (!id) {
      console.log("ID kosong");
      e.preventDefault();
      alert("Project details are not available");
    }
  };
  

  return (
    <div className="group relative w-full">
            
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
    
        <div className="relative p-5 z-10">
          <div className="relative overflow-hidden rounded-lg">
            {isVideo ? (
              <video
                src={img}
                alt={title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                controls
                muted
                loop
              />
            ) : (
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            )}
          </div>
          
          <div className="mt-4 space-y-3">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              {title}
            </h3>
            
            <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-2">
              {description}
            </p>
            
            <div className="pt-4 flex items-center justify-end">
              {id ? (
                <Link
                  to={`/project/${id}`}
                  onClick={handleDetails}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                >
                  <span className="text-sm font-medium">Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <span className="text-gray-500 text-sm">Details Not Available</span>
              )}
            </div>
          </div>
          
          <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;