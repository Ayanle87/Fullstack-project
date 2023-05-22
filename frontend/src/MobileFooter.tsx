import React, { useState, useEffect } from "react";
import styles from "./MobileFooter.module.css";

const icons = [
  {
    src:
      process.env.PUBLIC_URL +
      "/ux ikoner/Toggles50h/ElectronicsToggleSmallOn50px.png",
    alt: "Elektronik",
    onClick: () => {},
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/ux ikoner/Toggles50h/VehicleToggleSmallOn50px.png",
    alt: "Fordon",
    onClick: () => {},
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/ux ikoner/Toggles50h/SportToggleSmallOn50px.png",
    alt: "Fritid",
    onClick: () => {},
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/ux ikoner/Toggles50h/HomeToggleSmallOn50px.png",
    alt: "Hushåll",
    onClick: () => {},
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/ux ikoner/Toggles50h/ClothesToggleSmallOn50px.png",
    alt: "Kläder",
    onClick: () => {},
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/ux ikoner/Toggles50h/OtherToggleSmallOn50px.png",
    alt: "Övrigt",
    onClick: () => {},
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/ux ikoner/Toggles50h/SearchToggleSmall50px.png",
    alt: "Sök",
    onClick: () => {},
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
    return null; // dont render the footer if not in mobile view
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
            <span className={styles.iconText}>{icon.alt}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileFooter;
