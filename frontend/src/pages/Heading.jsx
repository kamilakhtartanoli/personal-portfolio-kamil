import React from "react";

const Heading = ({ head }) => {
  return (
    <>
      <div className="max-w-6xl mx-auto text-center overflow-hidden">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
        <span className="text-[#fdd300]">{head}</span>
        </h2>
      </div>
    </>
  );
};

export default Heading;
