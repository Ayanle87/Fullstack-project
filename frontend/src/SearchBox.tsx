import React, { useState } from "react";
import styles from "./SearchBox.module.css";

export interface SearchBoxProps {
    onSearch?: (query: string) => void;
    onSearchClose: () => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch, onSearchClose }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (onSearch) {
            onSearch(searchQuery);
        }
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
                <button
                    type="button"
                    className={styles.closeButton}
                    onClick={onSearchClose}
                >
                    Close
                </button>
            </form>
        </div>
    );
};

export default SearchBox;
