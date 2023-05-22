import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { useForm } from "../hooks/useForm";

export const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [globalPokemons, setGlobalPokemons] = useState([]);

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

  const getAllPokemons = async (limit = 20) => {
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

    setAllPokemons([...allPokemons, ...results]);
    setLoading(false);
  };

  // Llamar a todos los pokemones

  const getGlobalPokemons = async () => {
    const res = await fetch(`${baseURL}pokemon?limit=10000&offset=0`);

    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);

      const data = await res.json();
      return data;
    });

    const results = await Promise.all(promises);

    setGlobalPokemons(results);
    setLoading(false);
  };

  // Obtener pokemon por id

  const getPokemonById = async (id) => {
    const res = await fetch(`${baseURL}pokemon/${id}`);
    const data = await res.json();
    return data;
  };

  // Lista de tipos y habilidades

/*   const [types, setTypes] = useState([])
  const [abilities, setAbilities] = useState([])

  const getTypes = async () => {
    const res = await fetch(`${baseURL}type`);
    const data = await res.json();
     setTypes(data.results)
      return 
  };

  const getAbilities = async () => {
    const res = await fetch(`${baseURL}ability`);
    const data = await res.json();
     setAbilities(data.results)
     return
  }; */

  useEffect(() => {
    getAllPokemons();
  }, [offset]);

  useEffect(() => {
    getGlobalPokemons();
  }, []);

  // btn cargar más
  const onClickLoadMore = () => {
    setOffset(offset + 20);
  };

  // filter functions + state

  const [abilitySelected, setAbilitySelected] = useState({
    "stench": false,
    "drizzle": false,
    "speedBoost": false,
    "battleArmor": false,
    "sturdy": false,
    "damp": false,
    "limber": false,
    "sandVeil": false,
    "statick": false,
    "voltAbsorb": false,
    "waterAbsorb": false,
    "oblivious": false,
    "cloudNine": false,
    "compoundEyes": false,
    "insomnia": false,
    "colorChange": false,
    "immunity": false,
    "flashFire": false,
    "shieldDust": false,
    "ownTempo": false,

  });
  const [typeSelected, setTypeSelected] = useState({
    grass: false,
    normal: false,
    fighting: false,
    flying: false,
    poison: false,
    ground: false,
    rock: false,
    bug: false,
    ghost: false,
    steel: false,
    fire: false,
    water: false,
    electric: false,
    psychic: false,
    ice: false,
    dragon: false,
    dark: false,
    fairy: false,
    unknow: false,
    shadow: false,
  });

  const [filteredPokemons, setFilteredPokemons] = useState([]);

  const handleCheckbox = (e) => {
    /* {console.log(e.target)} */
    setTypeSelected({
      ...typeSelected,
      [e.target.name]: e.target.checked,
    });

    if (e.target.checked) {
      const filteredResults = globalPokemons.filter((pokemon) =>
        pokemon.types.map((type) => type.name).includes(e.target.name)
      );
      /* console.log(type + "type"); */
      console.log(filteredResults);
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        allPokemons,
        globalPokemons,
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
    
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
