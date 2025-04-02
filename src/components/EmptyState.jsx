import React from "react";

const EmptyState = ({
  icon,
  title,
  description,
  buttonText,
  buttonIcon,
  onButtonClick,
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 border border-dashed border-gray-300 rounded-lg col-span-full">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-medium text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-4">{description}</p>
      {buttonText && (
        <button
          onClick={onButtonClick}
          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-[#FF312E] rounded-md hover:bg-red-600 focus:outline-none"
        >
          {buttonIcon && <span className="mr-2">{buttonIcon}</span>}
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
