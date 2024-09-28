 "use client"
import React from "react";
import { useEffect, useState } from "react";


import Cookies from "js-cookie";
import axios from "axios";
import { useConfig } from "../../../../../context/ConfigContext";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import CircularIndeterminate from "@/components/CircularIndeterminate/CircularIndeterminate";
import { useAuth } from "../../../../../context/AuthContext";


const OrderDetails = ({ params }) => {
  const { id } = params; // Certifique-se de que o parâmetro corresponde ao nome na URL
  const userId = Cookies.get("userId");
  const { logout, loggedIn } = useAuth();
  const [boleto, setBoleto] = useState(""); // Usando useState para um único boleto
  const { apiUrl } = useConfig();

  useEffect(() => {
    if (loggedIn) {
      axios
        .get(`https://serveradmin-whhj.onrender.com/api/boleto/${id}/${userId}`)
        .then((response) => {
          console.log("Resposta da API:", response); // Verificar a resposta completa da API
          console.log("Dados recebidos:", response.data); // Verificar os dados recebidos no console
          setBoleto(response.data.boleto);
        })
        .catch((error) => {
          console.error("Erro ao obter os pedidos:", error);
        });
    }
   
  }, [loggedIn, userId]);
  

  return (
    <>
      <Header />
      <Navbar />
      {/* <Helmet>
        <title>Histórico de Compras - Loja Mediewal</title>
        <meta
          name="description"
          content="Veja as últimas novidades em nossa loja, com uma seleção de produtos novos."
        />
      </Helmet> */}
      {boleto ? (
        <div style={{ marginTop: "15rem" }}>
          <span>{boleto.billingType}</span>
          <span href>{boleto.bankSlipUrl}</span><br/>
          value: {boleto.value}
          <div>
            {boleto.products.map((product, prodIndex) => (
              <div key={prodIndex}>
                color: {product.color}<br/>
                tamanho: {product.size}
                <img src={product.image} alt="" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div><CircularIndeterminate/></div>
      )}
    </>
  );
  
};

export default OrderDetails;
