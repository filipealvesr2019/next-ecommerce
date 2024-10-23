"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useConfig } from './ConfigContext';

// Definindo o tipo inicial do contexto
const initialAuthContext = {
  loggedIn: false,
  isCustomer: false,
  userId: null,
  login: async () => {},
  logout: () => {},
  remainingAttempts: ''
};

const AuthContext = createContext(initialAuthContext);

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isCustomer, setIsCustomer] = useState(false);
  const [userId, setUserId] = useState(null);
  const [remainingAttempts, setRemainingAttempts] = useState('');
  const { apiUrl } = useConfig();

  useEffect(() => {
    try {
      const storedToken = Cookies.get('token');
      const storedRole = Cookies.get('role');
      const storedUserId = Cookies.get('userId');
      
      if (storedToken && storedRole && storedUserId) {
        setLoggedIn(true);
        setIsCustomer(storedRole === 'customer');
        setUserId(storedUserId);
      }
    } catch (error) {
      console.error('Erro ao recuperar dados de autenticação:', error);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${apiUrl}/loginCustumer`, {
        email,
        password,
      });
  
      const { token, user } = response.data;
      
      if (!token || !user) {
        throw new Error('Dados de resposta inválidos');
      }

      const { role, _id, remainingAttempts } = user;
  
      setLoggedIn(true);
      setIsCustomer(role === 'customer');
      setUserId(_id);
      setRemainingAttempts(remainingAttempts);
  
      Cookies.set('token', token);
      Cookies.set('role', role);
      Cookies.set('userId', _id);

      return true;
    } catch (error) {
      if (error.response?.status === 401) {
        const { remainingAttempts } = error.response.data;
        setRemainingAttempts(remainingAttempts);
        toast.error('Erro, email ou senha inválidos!', { position: 'top-center' });
      } else {
        console.error('Erro na solicitação de login:', error);
        toast.error('Erro ao realizar login. Tente novamente.', { position: 'top-center' });
      }
      return false;
    }
  };
  
  const logout = () => {
    try {
      ['token', 'role', 'userId'].forEach(cookie => Cookies.remove(cookie));
      
      setLoggedIn(false);
      setIsCustomer(false);
      setUserId(null);
      setRemainingAttempts('');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      toast.error('Erro ao fazer logout', { position: 'top-center' });
    }
  };

  const values = {
    loggedIn,
    isCustomer,
    userId,
    login,
    logout,
    remainingAttempts
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};