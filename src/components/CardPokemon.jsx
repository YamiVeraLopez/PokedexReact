import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card4 } from "./styledComponents";

export const CardPokemon = ({ pokemon, id }) => {
  const [statusCard, setStatusCard] = useState(true);
  const [animation, setAnimation] = useState("");
  const baseImg = "pokemon.sprites.other.home.front_default";

  const handleClick = (e) => {
    setStatusCard(!statusCard);
    if (animation != "") {
      setAnimation("");
    } else {
      setAnimation("rotate-scale-up-vertical");
    }
  }

  return (
    <>
      {statusCard ? (
        <Card4
          id={pokemon.id}
          view={"front"}
          textTitle={pokemon.name}
          subtitle={pokemon.id}
          img={pokemon.sprites.other.home.front_default}
          alt={`Pokemon ${pokemon.name}`}
          btnInfo={"Ver Pokemon"}
          weightPokemon={pokemon.weight}
          heightPokemon={pokemon.height}
          handleClick={handleClick}
          pokemon={pokemon}
          clase={animation}
        ></Card4>
      ) : (
        <Card4
          id={pokemon.id}
          view={"back"}
          textTitle={pokemon.name}
          subtitle={pokemon.id}
          img={pokemon.sprites.back_default}
          alt={`Pokemon ${pokemon.name}`}
          btnInfo={"Ver Pokemon"}
          handleClick={handleClick}
          pokemon={pokemon}
          clase={animation}
        ></Card4>
      )}
      {/*   <Card4 id={pokemon.id} textTitle={pokemon.name} subtitle={pokemon.id} img={pokemon.sprites.other.home.front_default} alt={`Pokemon ${pokemon.name}`} btnInfo={"Ver Pokemon"} weightPokemon={pokemon.weight} heightPokemon={pokemon.height} onClick={() => setStatusCard(!setStatusCard)}></Card4> */}
      {/*  <Link to={`/pokemon/${pokemon.id}`} className="card-pokemon">
        <div className="card-img" style={{ width: "80px", height: "80px" }}>
          <img
            src={pokemon.sprites.other.home.front_default}
            alt={`Pokemon ${pokemon.name}`}
          />
        </div>
        <div className="cardInfo">
          <span className="pokemonID">Nº {pokemon.id}</span>
          <h3>{pokemon.name}</h3>
          <div className="card-types">
            {pokemon.types.map(type => {
              <span key={type.type.name} className={type.type.name}>
                {type.type.name}
              </span>;
            })}
          </div>
        </div>
      </Link> */}
    </>
  );
};
