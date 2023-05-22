import React, { useContext, useEffect, useState } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import { useLocation } from 'react-router-dom'
import { CardPokemon } from '../components'

export const SearchPage = () => {

  const location = useLocation()

  const {allPokemons} = useContext(PokemonContext)
  const [searchTerm, setSearchTerm] = useState(location.state);
  const [searchResults, setSearchResults] = useState([]);

  const filteredName = allPokemons.filter(pokemon => pokemon.name.includes(location.state.toLowerCase())) 

  useEffect(() => {
    if (filteredName.length == 0) {
      const buscarPokemon = async () => {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/ability/${searchTerm}`);
          if (response.ok) {
            const pokemonData = await response.json();
            setSearchResults([pokemonData]);
          } else {
            setSearchResults([]);
          }
        } catch (error) {
          setSearchResults([]);
          console.log('Error al buscar el Pokémon:', error);
        }
      };
  
      if (searchTerm.trim() !== '') {
        buscarPokemon();
      } else {
        setSearchResults([]);
      }
    } else {
      setSearchResults(filteredName)
    }
  
  }, [searchTerm]);


  return (
    <div className='container'>
      <h4 className='p-search'> Se encontraron <span>{searchResults.length}</span> resultados:</h4>
    
    <section>
      {searchResults.map(pokemon => <CardPokemon pokemon={pokemon} key={pokemon.id}/>)}
    </section>
      
      </div>
  )
}
