import React, { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import { useLocation } from 'react-router-dom'
import { CardPokemon } from '../components'

export const SearchPage = () => {

  const location = useLocation()
  /* console.log(location); */

  const {globalPokemons} = useContext(PokemonContext)

  const filteredPokemons = globalPokemons.filter(pokemon => pokemon.name.includes(location.state.toLowerCase()))
/* 
  console.log(filteredPokemons); */

  return (
    <div className='container'>
      <h4 className='p-search'> se encontraron <span>{filteredPokemons.length}</span> resultados:</h4>
    
    <section>
      {filteredPokemons.map(pokemon => <CardPokemon pokemon={pokemon} key={pokemon.id}/>)}
    </section>
      
      </div>
  )
}
