import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { useForm } from "../hooks/useForm";

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);

  const [offset, setOffset] = useState(0);

  // Utilizo CustomHook - useForm
  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: "",
  });

  // Estados generales para la aplicación
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);

  // llamar 20 pokemones de la API

  const baseURL = "https://pokeapi.co/api/v2/";

  const getPokemons = async (limit = 20) => {
    const res = await fetch(
      `${baseURL}pokemon?limit=${limit}&offset=${offset}`
    );

    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);

      const data = await res.json();
      return data;
    });

    const results = await Promise.all(promises);

    setPokemons([...pokemons, ...results]);
    setLoading(false);
  };

  // Llamar a todos los pokemones

  const getAllPokemons = async () => {
    const res = await fetch(`${baseURL}pokemon?limit=10000&offset=0`);

    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);

      const data = await res.json();
      return data;
    });

    const results = await Promise.all(promises);

    setAllPokemons(results);
    setLoading(false);
  };

  // Obtener pokemon por id

  const getPokemonById = async (id) => {
    const res = await fetch(`${baseURL}pokemon/${id}`);
    const data = await res.json();
    return data;
  };

  // Lista de tipos y habilidades

  const [type, setType] = useState([]);
  const [ability, setAbility] = useState([]);

  const getTypes = async (typeValue, value) => {
    const res = await fetch(`${baseURL}${typeValue}/${value}`);
    const data = await res.json();

    if (typeValue == "ability") {
      setAbility(data.pokemon.pokemon);
    } else {
      setType(data.pokemon);
    }

    /*  const res = await fetch(`${baseURL}type/grass`);
    const data = await res.json();
    setTypes(data.results); */

    return;
  };

  useEffect(() => {
    getTypes("ability", "adaptability");
  }, []);


/*   const getAbilities = async () => {
    const res = await fetch(`${baseURL}ability`);
    const data = await res.json();
    setAbilities(data.results);
    return;
  }; */

  // Eliminar uno o varios pokemones

  const removePokemon = (pokemonNames) => {
    setAllPokemons((prevPokemons) =>
      prevPokemons.filter((pokemon) => !pokemonNames.includes(pokemon.name))
    );
  };

  useEffect(() => {
    getPokemons();
  }, [offset]);

  useEffect(() => {    
    getAllPokemons();
  }, []);

  // guarda los pokémones en el Local Storage cada vez que haya cambios en el estado pokemons
  useEffect(() => {
    localStorage.setItem("pokemons", JSON.stringify(pokemons));
  }, [pokemons]);

  // Carga los pokémones del Local Storage cuando se inicie la aplicación

  useEffect(() => {
    const storedPokemons = JSON.parse(localStorage.getItem("pokemons"));
    if (storedPokemons) {
      setAllPokemons(storedPokemons);
    }
  }, []);

  // btn cargar más
  const onClickLoadMore = () => {
    setOffset(offset + 20);
  };

  // filter functions + state

/*   const [abilitySelected, setAbilitySelected] = useState({
    stench: false,
    drizzle: false,
    speedBoost: false,
    battleArmor: false,
    sturdy: false,
    damp: false,
    limber: false,
    sandVeil: false,
    statick: false,
    voltAbsorb: false,
    waterAbsorb: false,
    oblivious: false,
    cloudNine: false,
    compoundEyes: false,
    insomnia: false,
    colorChange: false,
    immunity: false,
    flashFire: false,
    shieldDust: false,
    ownTempo: false,
  }); */
  const [typeSelected, setTypeSelected] = useState([
    "grass",
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
    "unknow",
    "shadow",
  ]);

  const [filteredPokemons, setFilteredPokemons] = useState([]);

  const handleCheckbox = (e) => {
    let typePokemon = e;
    /* {console.log(e.target)} */
    setFilteredPokemons((typeSelected) => {
      // Verificar si el nombre del Pokémon ya está en la lista de seleccionados
      if (!typeSelected.includes(typePokemon)) {
        return [...typeSelected, typePokemon];
      } else {
        // Filtrar el Pokémon seleccionado de la lista
        return typeSelected.filter((type) => type !== typePokemon);
      }
    });
  };

  const handleFilter = (filterType, filterValue) => {
    setSelectedPokemons((prevSelectedPokemons) => {
      let filteredPokemons = [];

      switch (filterType) {
        case "type":
          filteredPokemons = prevSelectedPokemons.filter((pokemonName) => {
            // Aquí implementa la lógica para obtener los tipos del Pokémon y compararlos con el valor de filtro.
            // Puedes utilizar la PokeAPI o cualquier otra fuente de datos para obtener los datos completos de cada Pokémon y sus tipos.

            const pokemonData = obtenerDatosDelPokemon(pokemonName); // Obtener los datos del Pokémon
            const pokemonTypes = pokemonData.type.map(
              (typeData) => typeData.name
            ); // Obtener los tipos del Pokémon

            return pokemonTypes.includes(filterValue); // Verificar si el tipo de Pokémon coincide con el valor de filtro
          });
          break;

        case "ability":
          filteredPokemons = prevSelectedPokemons.filter((pokemonName) => {
            // Aquí implementa la lógica para obtener las habilidades del Pokémon y compararlas con el valor de filtro.
            // Puedes utilizar la PokeAPI o cualquier otra fuente de datos para obtener los datos completos de cada Pokémon y sus habilidades.

            const pokemonData = obtenerDatosDelPokemon(pokemonName); // Obtener los datos del Pokémon
            const pokemonAbilities = pokemonData.abilities.map(
              (abilityData) => abilityData.name
            ); // Obtener las habilidades del Pokémon

            return pokemonAbilities.includes(filterValue); // Verificar si la habilidad del Pokémon coincide con el valor de filtro
          });
          break;

        default:
          filteredPokemons = prevSelectedPokemons; // Si el tipo de filtro no coincide con "type" ni "ability", mantener los Pokémon sin cambios
      }

      return filteredPokemons;
    });
  };

  /*  const pokemonName = e;

    setSelectedPokemons((prevSelectedPokemons) => {
      // Verificar si el nombre del Pokémon ya está en la lista de seleccionados
      if (!prevSelectedPokemons.includes(pokemonName)) {
        return [...prevSelectedPokemons, pokemonName];
      } else {
        // Filtrar el Pokémon seleccionado de la lista
        return prevSelectedPokemons.filter((name) => name !== pokemonName);
      }
    }); */

  return (
    <PokemonContext.Provider
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        pokemons,
        allPokemons,
        getPokemonById,
        onClickLoadMore,
        // loader
        loading,
        setLoading,
        // btn filter
        active,
        setActive,
        // filter container checkbox
        handleCheckbox,
        filteredPokemons,
        //eliminado de pokemones
        removePokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
