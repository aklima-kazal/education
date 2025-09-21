import React from "react";

const Listitem = ({ children, className }) => {
  return (
    <div>
      <li className={className}>{children}</li>
    </div>
  );
};

export default Listitem;
