import React, { useState, useEffect } from "react";
import styles from "./MobileFooter.module.css";

const icons = [
  {
    src: "icon1.png",
    alt: "Icon 1",
    onClick: () => {
    },
  },
  {
    src: "icon2.png",
    alt: "Icon 2",
    onClick: () => {
    },
  },
  {
    src: "icon3.png",
    alt: "Icon 3",
    onClick: () => {
    },
  },
  {
    src: "icon4.png",
    alt: "Icon 4",
    onClick: () => {
    },
  },
  {
    src: "icon5.png",
    alt: "Icon 5",
    onClick: () => {
    },
  },
  {
    src: "icon6.png",
    alt: "Icon 6",
    onClick: () => {
    },
  },
];

const MobileFooter: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 780);
      };
  
      handleResize();
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    if (!isMobile) {
      return null; // Dont render the footer if not in mobile view
    }
  
    return (
      <div className={styles.footerContainer}>
        <div className={styles.iconsContainer}>
          {icons.map((icon, index) => (
            <button
              key={index}
              className={styles.iconButton}
              onClick={icon.onClick}
            >
              <img src={icon.src} alt={icon.alt} className={styles.iconImage} />
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default MobileFooter;