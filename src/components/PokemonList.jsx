import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { CardPokemon } from "./CardPokemon";
import { Loader } from "./Loader";
import { Grid } from "@nextui-org/react";

export const PokemonList = () => {
  const { allPokemons, loading } = useContext(PokemonContext);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Grid.Container gap={2} justify="flex-start">
          {/* <div className="card-list-pokemon container"> */}
            {allPokemons.map((pokemon) => (
              <Grid xs={4} sm={3} md={3} lg={6} key={pokemon.name}>
                <CardPokemon pokemon={pokemon} key={pokemon.id} />
              </Grid>
            ))}
          {/* </div> */}
        </Grid.Container>
      )}
    </>
  );
};
