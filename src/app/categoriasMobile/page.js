"use client";
import React, { useState, useEffect } from "react";
import styles from "./CategoriesMobile.module.css";
import { useConfig } from "../../../context/ConfigContext";
import ImageGalleryMobile from "../../components/Categories/ImageGallery/ImageGalleryMobile";
import Navbar from "../../components/Navbar/Navbar";

const CategoriasMobile = () => {
  const [categories, setCategories] = useState([]);
  const { apiUrl } = useConfig();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/allCategories`);
        const data = await response.json();

        setCategories((prevCategories) => {
          const uniqueCategoriesSet = new Set([
            ...prevCategories.map((c) => c.category),
            ...data.map((c) => c.category),
          ]);
          const uniqueCategories = Array.from(uniqueCategoriesSet).map(
            (category) => ({ category })
          );

          return uniqueCategories;
        });
      } catch (error) {
        console.error("Erro ao obter categorias:", error);
      }
    };

    fetchData();
  }, [apiUrl]); // Add apiUrl as a dependency

  return (
    <div style={{ marginTop: "2rem", marginBottom: "10rem" }} className={styles.ImageGalleryMobile}>
      <ImageGalleryMobile categories={categories} /> {/* Pass categories if needed */}
      <Navbar />
    </div>
  );
};

export default CategoriasMobile;
