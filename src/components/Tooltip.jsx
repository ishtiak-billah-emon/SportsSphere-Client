import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="tooltip-container"
    >
      {children}
      {isVisible && <div className="Tooltip">{text}</div>}
    </div>
  );
};

export default Tooltip;
