import React, { useEffect, useRef, useState } from "react";

function useHover(ref) {
  const [value, setValue] = useState(false);
  const handleMouseOver = () => {
    setValue(true);
  };
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

  return value;
}

const Card = ({ heading, paragraph, imgUrl, projectLink }) => {
  const hoverRef = useRef(null);
  const isHovered = useHover(hoverRef);

  return (
    <div className="card" ref={hoverRef}>
      <div
        className={isHovered ? "backgroundImage hoverBlur" : "backgroundImage"}
        style={{
          backgroundImage: "url(" + imgUrl + ")",
        }}
      />
      <a
        rel="noopener noreferrer"
        className="content"
        href={projectLink ? projectLink : "#"}
        target="_blank"
      >
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        <button className="btn">Explore</button>
      </a>
    </div>
  );
};

export default Card;
