import React, { useState } from "react";
import axios from "axios";
import styles from "./SearchBox.module.css";

export interface SearchBoxProps {
  onSearch?: (query: string) => void;
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

  // Start of code from ObjectCard.tsx
  const handleClick = (id: number) => {
    // Implement your logic for handling the click event here
    console.log("Clicked product with ID:", id);
  };

  const categoryImages: { [key: string]: string } = {
    Elektronik: "/ux ikoner/Pins/ElektronikMainD.png",
    Fordon: "/ux ikoner/Pins/FordonMainD.png",
    Fritid: "/ux ikoner/pins/FritidMain@0.png",
    Hushåll: "/ux ikoner/pins/HusMain@0.png",
    Kläder: "/ux ikoner/pins/KladerMain@0.png",
    Övrigt: "/ux ikoner/pins/OvrigtMain@0.png",
  };
  // End of code from ObjectCard.tsx

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

      {/* Display search results */}
      {searchResults.length > 0 &&
        searchResults.map((product) => (
          <img
            className="styledPins"
            key={product.id}
            src={categoryImages[product.category]}
            alt={product.name}
            onClick={() => handleClick(product.id)}
          />
        ))}
    </div>
  );
};

export default SearchBox;
