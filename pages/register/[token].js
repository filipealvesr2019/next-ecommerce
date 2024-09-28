"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Import useRouter for Next.js routing

import style from "./ResetPasswordPage.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from '@/components/Header/Header';

const ResetPasswordPage = () => {
  const router = useRouter({params}); // Get the router object

  const { token } = params; // Extract the token from the URL parameters

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Verifies if the token is present in the URL
    if (!token) {
      setMessage('Token inválido.');
    }
  }, [token]);

  const handleResetPassword = async () => {
    if (!token) {
      setMessage('Token não encontrado.');
      return;
    }

    try {
      // Verify if passwords match
      if (newPassword !== confirmPassword) {
        setMessage('As senhas não coincidem.');
        return;
      }

      // Send request to reset password
      const response = await axios.post(`https://serveradmin-whhj.onrender.com/reset-password/${token}`, {
        token, // use token from the URL
        newPassword,
        confirmPassword,
      });

      // Display success message
      setMessage(response.data.error ? response.data.error : 'Senha atualizada com sucesso!');
      toast.success("Senha atualizada com sucesso!");

    } catch (error) {
      // Display error messages
      setMessage(error.response?.data?.message || 'Ocorreu um erro ao redefinir a senha.');
    }
  };

  return (
    <div>
      <Header />
      <div className={style.formContainer}>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          style={{ marginTop: "8rem" }}
        />
        <h2 className={style.formContainer__h2}>Redefinir Senha</h2>
        <div className={style.flex}>
          {message && <p>{message}</p>}
          <label className={style.formContainer__label}>Nova Senha:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className={style.formContainer__input}
          />
        </div>
        <div className={style.flex}>
          <label className={style.formContainer__label}>Confirmar Senha:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={style.formContainer__input}
          />
        </div>
        <button
          onClick={handleResetPassword}
          className={style.formContainer__button}
        >
          Redefinir Senha
        </button>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
