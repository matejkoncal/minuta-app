import { useState } from "react";
import { Artycle } from "./App";

interface Props {
  article: Artycle;
}

const gerRandomNumberInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomColor = () => {
  const r = gerRandomNumberInRange(0, 255);
  const g = gerRandomNumberInRange(0, 255);
  const b = gerRandomNumberInRange(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
};

//function that accept background color and return contrast text color
const getContrastColor = (color: string) => {
  const r = parseInt(color.substring(4, color.indexOf(",")), 10);
  const g = parseInt(
    color.substring(color.indexOf(",") + 1, color.lastIndexOf(",")),
    10
  );
  const b = parseInt(
    color.substring(color.lastIndexOf(",") + 1, color.length - 1),
    10
  );
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "black" : "white";
};

const NewsItem = ({ article }: Props) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const backgroundColor = getRandomColor();
  const textColor = getContrastColor(backgroundColor);
  return (
    <a
      href={article?.url}
      target="_blank"
      rel="noopener noreferrer"
      //@ts-ignore
      onClick={() => Neutralino.os.open(article?.url)}
      style={{
        marginBottom: "40px",
        backgroundColor: backgroundColor,
        minHeight: "25px",
        display: "flex",
        alignItems: "center",
        paddingLeft: "15px",
        paddingRight: "15px",
        paddingTop: "7px",
        paddingBottom: "7px",
        borderRadius: "5px",
        textDecoration: "none",
        color: textColor,
        transition: "all 0.7s ease",
        transform: isHovering
          ? "scale(1.1)"
          : `rotate(${gerRandomNumberInRange(-6, 6)}deg)`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {article?.title}
    </a>
  );
};

export default NewsItem;
