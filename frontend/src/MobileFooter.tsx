import React, { useState, useEffect } from "react";
import styles from "./MobileFooter.module.css";
import { Button } from "react-bootstrap";
import SearchBox from "./SearchBox";




const searchIcon = {
  src:
    process.env.PUBLIC_URL + "/ux ikoner/Toggles50h/SearchToggleSmall50px.png",
  alt: "Sök",
};

const initialIcons = [
  {
    activeSrc:
      process.env.PUBLIC_URL +
      "/ux ikoner/Toggles50h/ElectronicsToggleSmallOn50px.png",
    inactiveSrc:
      process.env.PUBLIC_URL +
      "/ux ikoner/Toggles50h/ElectronicsToggleSmallOff50px.png",
    alt: "Elektronik",
    isActive: true,
  },
  {
    activeSrc:
      process.env.PUBLIC_URL +
      "/ux ikoner/Toggles50h/VehicleToggleSmallOn50px.png",
    inactiveSrc:
      process.env.PUBLIC_URL +
      "/ux ikoner/Toggles50h/VehicleToggleSmallOff50px.png",
    alt: "Fordon",
    isActive: true,
  },
  {
    activeSrc:
      process.env.PUBLIC_URL +
      "/ux ikoner/Toggles50h/SportToggleSmallOn50px.png",
    inactiveSrc:
      process.env.PUBLIC_URL +
      "/ux ikoner/Toggles50h/SportToggleSmallOff50px.png",
    alt: "Fritid",
    isActive: true,
  },
  {
    activeSrc:
      process.env.PUBLIC_URL +
      "/ux ikoner/Toggles50h/HomeToggleSmallOn50px.png",
    inactiveSrc:
      process.env.PUBLIC_URL +
      "/ux ikoner/Toggles50h/HomeToggleSmallOff50px.png",
    alt: "Hushåll",
    isActive: true,
  },
  {
    activeSrc:
      process.env.PUBLIC_URL +
      "/ux ikoner/Toggles50h/ClothesToggleSmallOn50px.png",
    inactiveSrc:
      process.env.PUBLIC_URL +
      "/ux ikoner/Toggles50h/ClothesToggleSmallOff50px.png",
    alt: "Kläder",
    isActive: true,
  },
  {
    activeSrc:
      process.env.PUBLIC_URL +
      "/ux ikoner/Toggles50h/OtherToggleSmallOn50px.png",
    inactiveSrc:
      process.env.PUBLIC_URL +
      "/ux ikoner/Toggles50h/OtherToggleSmallOff50px.png",
    alt: "Övrigt",
    isActive: true,
  },
];

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

interface ProductProps {
  // id: number;
  // category: string;
  // visitedPins: number[];
  // onClick: (id: number, category: string) => void;
products: Product[]
}



// React.FC<PinProps> = ({ id, category, visitedPins, onClick }) => 
// Huvudfunktionen
const MobileFooter: React.FC<ProductProps> = ({products}) => {

// const MobileFooter: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [icons, setIcons] = useState(initialIcons);
  const [showSearchBox, setShowSearchBox] = useState(false);

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
    setIcons((prevIcons) => {
      const updatedIcons = prevIcons.map((icon, i) => ({
        ...icon,
        isActive: i === index || prevPressedIndex === index,
      }));

      return updatedIcons;
    });

    if (index === prevPressedIndex) {
      setPrevPressedIndex(-1);
    } else {
      setPrevPressedIndex(index);
    }
  };

  const handleSearchClick = () => {
    setShowSearchBox(!showSearchBox); 
  };

  const handleSearchClose = () => {
    setShowSearchBox(false); 
  };

  if (!isMobile) {
    return null; 
  }

  return (
    <div className={styles.footerContainer}>
      <div className={styles.iconsContainer}>
        {icons.map((icon, index) => (
          <Button
            key={index}
            variant="light"
            className={`${styles.iconButton} ${
              icon.isActive ? styles.active : ""
            }`}
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
        <Button
          variant="light"
          className={styles.iconButton}
          onClick={handleSearchClick}
        >
          <img
            src={searchIcon.src}
            alt={searchIcon.alt}
            className={styles.iconImage}
          />
          <span className={styles.iconText}>{searchIcon.alt}</span>
        </Button>
      </div>
      {showSearchBox && <SearchBox onClose={handleSearchClose} products={products} />}{" "}
    </div>
  );
};

export default MobileFooter;
