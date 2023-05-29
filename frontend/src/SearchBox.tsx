import React, { useState } from "react";
import axios from "axios";
import styles from "./SearchBox.module.css";

export interface SearchBoxProps {
  onSearch?: (query: string) => void;
  onClose?: () => void;
}

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [visitedPins, setVisitedPins] = useState<{ [key: number]: boolean }>({});

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }

    try {
      const response = await axios.get("http://localhost:8080/");
      const allProducts = response.data;

      const filteredProducts = allProducts.filter(
        (product: Product) =>
          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setSearchResults(filteredProducts);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = (id: number) => {
    console.log("Clicked product with ID:", id);
    // Implement your logic for handling the click event here
    setVisitedPins((prevState) => ({
      ...prevState,
      [id]: true,
    }));
  };

  const categoryImages: { [key: string]: string } = {
    Elektronik: "/ux ikoner/76h/ElectronicsPin76vh.png",
    Fordon: "/ux ikoner/76h/VehiclePin76vh.png",
    Fritid: "/ux ikoner/76h/SportPin76vh.png",
    Hushåll: "/ux ikoner/76h/HomePin76vh.png",
    Kläder: "/ux ikoner/76h/ClothesPin76vh.png",
    Övrigt: "/ux ikoner/76h/OtherPin76vh.png",
  };

  const categoryImagesVisited: { [key: string]: string } = {
    Elektronik: "/ux ikoner/76h/ElectronicsPinVisited76vh.png",
    Fordon: "/ux ikoner/76h/VehiclePinVisited76vh.png",
    Fritid: "/ux ikoner/76h/SportPinVisited76vh.png",
    Hushåll: "/ux ikoner/76h/HomePinVisited76vh.png",
    Kläder: "/ux ikoner/76h/ClothesPinVisited76vh.png",
    Övrigt: "/ux ikoner/76h/OtherPinVisited76vh.png",
  };

  return (
    <div className={styles.searchBox}>
      <form className={styles.searchForm} onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          className={styles.searchInput}
          placeholder="Search..."
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>

      {searchResults.length > 0 &&
        searchResults.map((product) => (
          <img
            className="styledPins"
            key={product.id}
            src={visitedPins[product.id]
              ? categoryImagesVisited[product.category]
              : categoryImages[product.category]
            }
            alt={product.name}
            onClick={() => handleClick(product.id)}
          />
        ))}
    </div>
  );
};

export default SearchBox;
