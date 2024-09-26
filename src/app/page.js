import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Slider from "@/components/Slider/Slider";
import { ConfigProvider } from "../../context/ConfigContext";
import Categories from "@/components/Categories/Categories";
import CategoryCarousel from "@/components/CategoryCarousel/CategoryCarousel";
import Header from "@/components/Header/Header";
// import Header from "./Header";
// import Categories from "./Categories";
// import CategoryCarousel from "./CategoryCarousel";
// import DiscountImageCarousel from "./DiscountImageCarousel"; // Remover o espaço extra no final
// import NewArrivals from "./NewArrivals";
// import Footer from "./Footer";
export const metadata = {
  title: 'Home - Loja Mediewal', // Define o título da página
  description: 'Veja as últimas novidades em nossa loja, com uma seleção de produtos novos.', // Descrição da página
  icons: {
    icon: '/favicon.svg', // Define o favicon
  },
};

export default function Home() {
  
  return (
   
    <div >
       <ConfigProvider>
       <Header />

<Navbar />
<Slider />

<Categories />
<CategoryCarousel />
    </ConfigProvider>
{/* 

      <div style={{ display: "flex", marginTop: "3rem", flexDirection: "column" }}>
        <NewArrivals />
      </div>
  
      <Footer /> */}
    </div>
  );
}
