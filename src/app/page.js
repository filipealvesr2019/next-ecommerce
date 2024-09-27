
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Slider from "@/components/Slider/Slider";
import { ConfigProvider } from "../../context/ConfigContext";
import Categories from "@/components/Categories/Categories";
import CategoryCarousel from "@/components/CategoryCarousel/CategoryCarousel";
import Header from "@/components/Header/Header";


export const metadata = {
  title: "Home - Loja Mediewal", // Define o título da página
  description:
    "Veja as últimas novidades em nossa loja, com uma seleção de produtos novos.", // Descrição da página
  icons: {
    icon: "/favicon.svg", // Define o favicon
  },
};

export default function Home() {
 
  return (
    <div>
      <ConfigProvider>
        <Header />

        <Navbar />
        <Slider />

        <Categories />
        <CategoryCarousel />
      </ConfigProvider>
     

     
    </div>
  );
}
