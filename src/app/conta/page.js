 "use client"
import React, { useEffect, useState } from "react";

import styles from "./MobileProfile.module.css";


import LogoutIcon from "@mui/icons-material/Logout";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Navbar from "@/components/Navbar/Navbar";
import { useAuth } from "../../../context/AuthContext";
import LoginForm from "@/components/Login/LoginForm";
import Header from "@/components/Header/Header";
import Link from "next/link";


const MobileProfile = () => {
  const { logout, loggedIn } = useAuth(); // Obtendo o userId do contexto de autenticação
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    if (loggedIn) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [logout, loggedIn]);

  return (
    <div>
      <Header> </Header>
      {/* <Helmet>
        <title>Perfil - Loja Mediewal</title>
        <meta
          name="description"
          content="Veja as últimas novidades em nossa loja, com uma seleção de produtos novos."
        />
      </Helmet> */}
      <div style={{ marginTop: "10rem" }}>
        {loggedIn === true ? (
          <>
            <nav className={styles.nav}>
              <ul className={styles.ul}>
                <Link href={"/protected"} className={styles.Link}>
                  <li>Minha conta</li>
                </Link>
                <Link href={"/orders"}  className={styles.Link}>
                  <li>Historico de Compras</li>
                </Link>
                <Link href={"/forgotPassword"} className={styles.Link}>
                  <li>Alterar senha</li>
                </Link>
              </ul>
            </nav>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "red",
                bottom: "10px",
                left: "10px",
                gap: ".2rem",
                cursor: "pointer",
                marginTop: "15rem",
              }}
              onClick={logout}
            >
              <LogoutIcon />
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "poppins",
                  fontWeight: "400",
                }}
              >
                Sair
              </span>
            </div>
          </>
        ) : (
          <LoginForm />
        )}

        <Navbar />
      </div>
    </div>
  );
};

export default MobileProfile;
