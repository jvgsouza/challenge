import React, { createContext, useState, useEffect } from "react";
import contactService from "../service/contactService";
import listProductsService from "../service/listService";

const ContextHome = createContext({});
export const HomeProvider = ({ children }) => {

  const [qtdItems, setQtdItems] = useState(0);
  const [productsList, setProductsList] = useState([]);

  const addItem = async () => {
    const sum = qtdItems + 1;
    setQtdItems(sum);
    localStorage.setItem('qtdItems', sum);
  }

  const getProductsList = async () => {
    let lista = await listProductsService();
    setProductsList(lista.data);
  }

  const contact = async (email, name) => {
    return await contactService(email, name).then((res) => {
      return res;
    }).catch((error) => {
      return error;
    });
  }

  const verifyCart = async () => {
    const local = localStorage.getItem('qtdItems');
    if(local && local > 0){
      setQtdItems(Number(local));
    }
  }

  useEffect(async () => {
    verifyCart();
  }, []);

  return (
    <ContextHome.Provider value={{ qtdItems, addItem, getProductsList, productsList, contact }}>
      {children}
    </ContextHome.Provider>
  );
}
export default ContextHome;

// import { createContext } from 'react';
// export const ContextHome = createContext({
//   qtdItems: 0,
//   addItem: () => {},
// });