// pages/exemplo.js

export async function getServerSideProps(context) {
    // Obtém a categoria dos parâmetros da URL
    const { category } = context.query;
  
    // Verifica se a categoria existe
    if (!category) {
      // Se não existir, você pode redirecionar para uma página padrão ou retornar um erro
      return {
        redirect: {
          destination: '/404', // ou qualquer página padrão que você queira
          permanent: false,
        },
      };
    }
  
    // Redireciona para a página desejada com a categoria
    return {
      redirect: {
        destination: `/categories/${encodeURIComponent(category)}`,
        permanent: false, // false para um redirecionamento temporário
      },
    };
  }
  
  const ExemploPage = () => {
    return <div>Você está sendo redirecionado...</div>;
  };
  
  export default ExemploPage;
  