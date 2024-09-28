"use client"
import React, { useEffect, useState } from "react";

import styles from "./SearchResults.module.css";



const SearchResults = ({ params }) => {
  const { query } = params; // Extracting query from URL
  const [searchResults, setSearchResults] = useState([]);
  // ... (rest of your state variables)

  useEffect(() => {
    if (query) {
      fetchSearchResults(); // Fetch results whenever query changes
    }
  }, [query]);

  const fetchSearchResults = async () => {
    try {
      const response = await fetch(
        `https://serveradmin-whhj.onrender.com/api/search/product?searchQuery=${query}`
      );
      const data = await response.json();
      setSearchResults(data.products);
      // Handle additional state updates as necessary
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className={styles.searchResultsContainer}>
      {/* Render your search results here */}
    </div>
  );
};

export default SearchResults;
