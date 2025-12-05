import React from 'react';

const StickerCard = ({ children, bgColor = "bg-pastel-yellow", rotation = "-1", className = "" }) => {
  const rotationNum = parseFloat(rotation) || 0;
  const hoverRotation = rotationNum > 0 ? rotationNum * 0.3 : rotationNum * 0.3;
  
  return (
    <div
      className={`
        ${bgColor} border-2 border-black
        rounded-2xl p-6
        transition-all duration-300 ease-out
        shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
        hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
        hover:-translate-y-1
        ${className}
      `}
      style={{
        transform: `rotate(${rotationNum}deg)`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = `rotate(${hoverRotation}deg)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `rotate(${rotationNum}deg)`;
      }}
    >
      {children}
    </div>
  );
};

export default StickerCard;
