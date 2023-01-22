import React from "react";
import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import "../style.css";
import Header from "./Header/Header";
import { Route, Routes } from "react-router-dom";
import ProductList from "./ProductList/ProductList";
import Form from "./Form/Form";

const App = () => {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);
  // console.log('test');

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={"form"} element={<Form />} />
      </Routes>
      <Form />
    </div>
  );
};

export default App;
