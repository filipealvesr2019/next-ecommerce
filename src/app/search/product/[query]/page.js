"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Pagination from "@mui/material/Pagination"; // Adjust imports as needed
import Stack from "@mui/material/Stack";
import styles from "./SearchResults.module.css";


import { useConfig } from "../../../../../context/ConfigContext";

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
    const { apiUrl } = useConfig(); // Ensure this is properly configured
    try {
      const response = await fetch(
        `${apiUrl}/api/search/product?searchQuery=${query}`
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
