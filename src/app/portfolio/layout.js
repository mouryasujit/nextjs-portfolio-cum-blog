import React from "react";

const layout = ({ children }) => {
  return (
    <div className="mt-10">
      <h1 className="text-6xl">Our Works</h1>
      {children}
    </div>
  );
};

export default layout;
