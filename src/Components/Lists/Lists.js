import React from "react";

const Lists = ({ children, className }) => {
  return (
    <div>
      <ul className={className}>{children}</ul>
    </div>
  );
};

export default Lists;
