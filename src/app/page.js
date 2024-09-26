"use client"
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Slider from "@/components/Slider/Slider";
import { ConfigProvider } from "../../context/ConfigContext";
import Categories from "@/components/Categories/Categories";
import CategoryCarousel from "@/components/CategoryCarousel/CategoryCarousel";
import Header from "@/components/Header/Header";
import { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import Header from "./Header";
// import Categories from "./Categories";
// import CategoryCarousel from "./CategoryCarousel";
// import DiscountImageCarousel from "./DiscountImageCarousel"; // Remover o espaço extra no final
// import NewArrivals from "./NewArrivals";
// import Footer from "./Footer";
// export const metadata = {
//   title: "Home - Loja Mediewal", // Define o título da página
//   description:
//     "Veja as últimas novidades em nossa loja, com uma seleção de produtos novos.", // Descrição da página
//   icons: {
//     icon: "/favicon.svg", // Define o favicon
//   },
// };

export default function Home() {
  const [heartClick, setHeartClick] = useState()
const handleHeartClick = () => {
  setHeartClick(!heartClick)
}
  return (
    <div>
      <ConfigProvider>
        <Header />

        <Navbar />
        <Slider />

        <Categories />
        <CategoryCarousel />
      </ConfigProvider>
     

      <div onClick={handleHeartClick}>  {heartClick ? <FavoriteIcon sx={{
        color:"red"
      }}/> : <FavoriteBorderIcon />}</div>
    </div>
  );
}
