import React, { useEffect, useRef, useState } from "react";

const Card = ({ heading, paragraph, imgUrl, projectLink }) => {
  function useHover() {
    const [value, setValue] = useState(false);
    const ref = useRef(null);
    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);

    useEffect(() => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);
        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    }, []);

    return [ref, value];
  }

  const [hoverRef, isHovered] = useHover();

  return (
    <div className="card" ref={hoverRef}>
      <div
        className={isHovered ? "backgroundImage hoverBlur" : "backgroundImage"}
        style={{
          backgroundImage: "url(" + imgUrl + ")",
        }}
      />
      <a
        className="content"
        href={projectLink ? projectLink : "#"}
        target="_blank"
      >
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        <button rel="noopener noreferrer" className="btn">
          Explore
        </button>
      </a>
    </div>
  );
};

export default Card;
