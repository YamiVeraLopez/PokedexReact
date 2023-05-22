import React, { useContext, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { CardPokemon } from "./CardPokemon";
import { Loader } from "./Loader";
import { Grid, Dropdown, Button } from "@nextui-org/react";
import { Delete } from 'react-iconly'

export const PokemonList = () => {
  const { allPokemons, loading, removePokemon } = useContext(PokemonContext);

  const [selectedPokemons, setSelectedPokemons] = useState([]);

  const [selected, setSelected] = React.useState(
    new Set(["Eliminar a pokemon:"])
  );

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  const handlePokemonSelection = (e) => {
    const pokemonName = e;

    setSelectedPokemons((prevSelectedPokemons) => {
      // Verificar si el nombre del Pokémon ya está en la lista de seleccionados
      if (!prevSelectedPokemons.includes(pokemonName)) {
        return [...prevSelectedPokemons, pokemonName];
      } else {
        // Filtrar el Pokémon seleccionado de la lista
        return prevSelectedPokemons.filter((name) => name !== pokemonName);
      }
    });
  };

  const handleRemoveSelectedPokemons = () => {
    removePokemon(selectedPokemons);
    setSelectedPokemons([]);
    setSelected(["Eliminar a pokemon:"]);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section>
         <Grid.Container>
          <Grid display="flex">
              <Dropdown>
              <Dropdown.Button flat color="error" css={{ tt: "capitalize" }}>
                {selectedValue}
              </Dropdown.Button>
              <Dropdown.Menu
                aria-label="Multiple selection actions"
                color="error"
                disallowEmptySelection
                selectionMode="multiple"
                selectedKeys={selected}
                onSelectionChange={setSelected}
                onAction={handlePokemonSelection}
              >
                {allPokemons.map((pokemon) => (
                  <Dropdown.Item key={pokemon.name} value={pokemon.name}>
                    {pokemon.name}
                  </Dropdown.Item>
                ))}

              </Dropdown.Menu>
            </Dropdown>
            
            <Button
              color="error"
              auto
              ghost
              onClick={handleRemoveSelectedPokemons}
            >
              <Delete set="light" primaryColor="pink" />
            </Button>
            </Grid>
         </Grid.Container>
            
            
          
          <Grid.Container gap={2} justify="flex-start">
            {/* <div className="card-list-pokemon container"> */}

            {allPokemons.map((pokemon) => (
              <Grid xs={12} sm={12} md={6} lg={4} key={pokemon.name}>
                <CardPokemon pokemon={pokemon} key={pokemon.id} />
              </Grid>
            ))}
            {/* </div> */}
          </Grid.Container>
        </section>
      )}
    </>
  );
};
