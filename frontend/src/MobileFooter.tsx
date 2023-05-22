import React, { useState, useEffect } from "react";
import styles from "./MobileFooter.module.css";
import { Button } from "react-bootstrap";

const initialIcons = [
  {
    activeSrc: process.env.PUBLIC_URL + "/ux ikoner/Toggles50h/ElectronicsToggleSmallOn50px.png",
    inactiveSrc: process.env.PUBLIC_URL + "/ux ikoner/Toggles50h/ElectronicsToggleSmallOff50px.png",
    alt: "Elektronik",
    isActive: true,
  },
  {
    activeSrc: process.env.PUBLIC_URL + "/ux ikoner/Toggles50h/VehicleToggleSmallOn50px.png",
    inactiveSrc: process.env.PUBLIC_URL + "/ux ikoner/Toggles50h/VehicleToggleSmallOff50px.png",
    alt: "Fordon",
    isActive: true,
  },
  {
    activeSrc: process.env.PUBLIC_URL + "/ux ikoner/Toggles50h/SportToggleSmallOn50px.png",
    inactiveSrc: process.env.PUBLIC_URL + "/ux ikoner/Toggles50h/SportToggleSmallOff50px.png",
    alt: "Fritid",
    isActive: true,
  },
  {
    activeSrc: process.env.PUBLIC_URL + "/ux ikoner/Toggles50h/HomeToggleSmallOn50px.png",
    inactiveSrc: process.env.PUBLIC_URL + "/ux ikoner/Toggles50h/HomeToggleSmallOff50px.png",
    alt: "Hushåll",
    isActive: true,
  },
  {
    activeSrc: process.env.PUBLIC_URL + "/ux ikoner/Toggles50h/ClothesToggleSmallOn50px.png",
    inactiveSrc: process.env.PUBLIC_URL + "/ux ikoner/Toggles50h/ClothesToggleSmallOff50px.png",
    alt: "Kläder",
    isActive: true,
  },
  {
    activeSrc: process.env.PUBLIC_URL + "/ux ikoner/Toggles50h/OtherToggleSmallOn50px.png",
    inactiveSrc: process.env.PUBLIC_URL + "/ux ikoner/Toggles50h/OtherToggleSmallOff50px.png",
    alt: "Övrigt",
    isActive: true,
  },
  {
    activeSrc: process.env.PUBLIC_URL + "/ux ikoner/Toggles50h/SearchToggleSmall50px.png",
    inactiveSrc: process.env.PUBLIC_URL + "/ux ikoner/Toggles50h/SearchToggleSmall50px.png",
    alt: "Sök",
    isActive: true,
  },
];

const MobileFooter: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [icons, setIcons] = useState(initialIcons);

  const [prevPressedIndex, setPrevPressedIndex] = useState(-1);


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

  const handleIconClick = (index: number) => {
    // if (prevPressedIndex === index){

    // }

    setIcons((prevIcons) => {
      const updatedIcons = prevIcons.map((icon, i) => ({
        ...icon,
        isActive: i === index ||  prevPressedIndex === index,
      }));

      return updatedIcons;
    });
    setPrevPressedIndex(index)
  };

  if (!isMobile) {
    return null; // Don't render the footer if not in mobile view
  }

  return (
    <div className={styles.footerContainer}>
      <div className={styles.iconsContainer}>
        {icons.map((icon, index) => (
          <Button
            key={index}
            variant="light"
            className={`${styles.iconButton} ${icon.isActive ? styles.active : ""}`}
            onClick={() => handleIconClick(index)}
          >
            <img
              src={icon.isActive ? icon.activeSrc : icon.inactiveSrc}
              alt={icon.alt}
              className={styles.iconImage}
            />
            <span className={styles.iconText}>{icon.alt}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default MobileFooter;
