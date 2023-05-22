import React, { useContext } from "react";
import {PokemonList } from "../components";
import { PokemonContext } from "../context/PokemonContext";

export const HomePage = () => {

  /* const {onClickLoadMore, active} = useContext(PokemonContext) */


  return (
    <>
      <div style={{maxWidth: '70vw', paddingTop: '15px'}}>
        <PokemonList />
      </div>
      
     {/*  <div  className="container">
        <button onClick={onClickLoadMore}>Cargar más...</button>
      </div> */}
    </>
  );
};
