import CategoriesComponent from "@/components/CategoriesComponent/CategoriesComponent";
import axios from "axios";

// Função para obter os dados do produto
const getProductData = async (category, token, apiUrl) => {
  const encodedProductName = encodeURIComponent(category);
  
  const response = await axios.get(
    `${apiUrl}/api/categories/${encodedProductName}/mixedProducts`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const uniqueSubcategories = [...new Set(response.data.mixedProducts.map((product) => product.subcategory))];

  return {
    products: response.data.mixedProducts,
    uniqueSubcategories,
  };
};
// Exportando a metadata
export async function generateMetadata({ params }) {
  const { category } = params;
  const token = "your_auth_token"; // Substitua pelo seu token
  const apiUrl = "https://serveradmin-whhj.onrender.com";

  let productData = null;

  try {
    productData = await getProductData(category, token, apiUrl);
  } catch (error) {
    console.error("Erro ao obter detalhes do produto:", error);
  }
  const keywords = productData?.uniqueSubcategories ? productData.uniqueSubcategories.join(', ') : '';

  const canonicalUrl = `https://mediewal.com.br/categories/${category}`; // Substitua pela URL canônica correta
  // Define metadados dinâmicos com base na categoria
  switch (category) {
    case "moda-dri-fit":
      return {
        title: "Moda Dri-Fit",
        description: "Confira os melhores produtos Dri-Fit.",
        alternates: {
          canonical: canonicalUrl, // Tag canônica
        },
        keywords: [keywords,'Moda Dri Fit', 'Moda Dry Fit', 'Moda Dry Fit Masculina', 'Moda Dri Fit Masculina'],

      };
    
    case "camiseta-performance":
      return {
        title: "Camiseta Performance",
        description:  "Explore a nova linha de camisetas.",
        alternates: {
          canonical: canonicalUrl,
        },
        keywords: [keywords, 'camiseta masculina', 'camisetas masculinas', 'camisetas'],

      };

    case "calcao-masculino":
      return {
        title: "Calção Masculino",
        description:  "Explore a nova linha de Calções.",
        alternates: {
          canonical: canonicalUrl,
        },
        keywords: [keywords, 'Calção Masculino', 'Calção', 'Shorts Masculinos'],

      };
      case "calcao-dri-fit":
        return {
          title: "Calção Dri Fit",
          description:  "Explore a nova linha de Calções Dri Fit.",
          alternates: {
            canonical: canonicalUrl,
          },
          keywords: [keywords, 'Calção Dri Fit', 'Calção Dry Fit'],

        };

      
    default:
      return {
        title: 'Loja Mediewal',
        description: "Somos a Mediewal, uma marca de roupas masculinas criada para quem quer se vestir bem e reinar no estilo. Inspirada no conceito de elegância  e confiança.",
        alternates: {
          canonical: canonicalUrl,
        },
        
      };
  }
}

// Componente da página
const ProductPage = async ({ params }) => {
  const { category } = params;
  const token = "your_auth_token"; // Substitua pelo seu token
  const apiUrl = "https://serveradmin-whhj.onrender.com";

  let productData = null;

  try {
    productData = await getProductData(category, token, apiUrl);
  } catch (error) {
    console.error("Erro ao obter detalhes do produto:", error);
  }

  return (
    <div>
      <CategoriesComponent category={category} />
    </div>
  );
};

export default ProductPage;
