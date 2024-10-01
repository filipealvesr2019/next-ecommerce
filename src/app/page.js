
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Slider from "@/components/Slider/Slider";
import Categories from "@/components/Categories/Categories";
import CategoryCarousel from "@/components/CategoryCarousel/CategoryCarousel";
import Header from "@/components/Header/Header";
import NewArrivals from "@/components/NewArrivals/NewArrivals";
import Footer from "@/components/Footer/Footer";
 
 

export const metadata = {
  title: "Loja Mediewal", // Define o título da página
  description:
    "Somos a Mediewal, uma marca de roupas masculinas criada para quem quer se vestir bem e reinar no estilo. Inspirada no conceito de elegância  e confiança.", // Descrição da página
  icons: {
    icon: "/favicon.svg", // Define o favicon
  },
  keywords: ['Loja Mediewal', 'Moda masculina', 'Dry Fit'],

};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Loja Mediewal",
    "url": "https://mediewal.com.br/",
    "description": "Somos a Mediewal, uma marca de roupas masculinas criada para quem quer se vestir bem e reinar no estilo. Inspirada no conceito de elegância  e confiança.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://mediewal.com.br/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  
  return (
    <div>
 <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
       <Header /> 

        <Navbar />
        <Slider />

        <Categories />
        <CategoryCarousel />
        <div
        style={{ display: "flex", marginTop: "3rem", flexDirection: "column" }}
      >
        <NewArrivals />{" "}
      </div>

      <Footer />

     

     
    </div>
  );
}
