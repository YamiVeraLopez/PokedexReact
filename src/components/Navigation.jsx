import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import { Button, IMG , InputSearch} from "./styledComponents"
import HeaderApp from "./styledComponents/HeaderApp";

export const Navigation = () => {
  const { onInputChange, valueSearch, onResetForm } =
    useContext(PokemonContext);
  //console.log(numero);

  const navigate = useNavigate();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/search", {
      state: valueSearch,
    });

    onResetForm();
  };

  return (
    <>
    <HeaderApp onSubmit={onSearchSubmit} valueSearch={valueSearch} onChange={onInputChange} />
    
      <Outlet/>
    
    </>
  );
};
