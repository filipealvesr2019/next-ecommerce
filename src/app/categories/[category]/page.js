import CategoriesComponent from '@/components/CategoriesComponent/CategoriesComponent';
import axios from 'axios';

// Função para obter os dados do produto
const getProductData = async (category, token, apiUrl) => {
  const encodedProductName = encodeURIComponent(category);
  const response = await axios.get(
    `${apiUrl}/api/categories/${encodedProductName}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.product;
  
};
// Exportando a metadata
export async function generateMetadata({ params }) {
  const { category} = params;
  const token = 'your_auth_token'; // Substitua pelo seu token
  const apiUrl = 'https://serveradmin-whhj.onrender.com';

  let productData = null;

  try {
    productData = await getProductData( category, token, apiUrl);
  } catch (error) {
    console.error('Erro ao obter detalhes do produto:', error);
  }
 
    const canonicalUrl = `http://localhost:5012/categories/${category}`; // Substitua pela URL canônica correta

  return {
    title: category,
    description: productData ? productData.description : "Descrição padrão do produto",
    alternates: {
      canonical: canonicalUrl, // Adicionando a tag canônica
    },
  };
}

// Componente da página
const ProductPage = async ({ params }) => {
  const { category } = params;
  const token = 'your_auth_token'; // Substitua pelo seu token
  const apiUrl = 'https://serveradmin-whhj.onrender.com';

  let productData = null;

  try {
    productData = await getProductData( category, token, apiUrl);
  } catch (error) {
    console.error('Erro ao obter detalhes do produto:', error);
  }
  
  return (
    <div>

          <CategoriesComponent  category={category}/>
      
   
    </div>
  );
};

export default ProductPage;
