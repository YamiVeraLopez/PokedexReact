import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import { Loader } from '../components'

export const PokemonPage = () => {

  const {getPokemonById} = useContext(PokemonContext)

  const [loading, setLoading] = useState(true)
  const [pokemon, setPokemon] = useState({})

  const fetchPokemon = async(id) => {
    const data = await getPokemonById(id)
    setPokemon(data)
    setLoading(false)
  }

  useEffect((id) => {
    fetchPokemon(id)
  }, [])
  


  return (
    <main className='container main-pokemon'>
      {
        loading ? (
          <Loader/>
        ) : (
          <>
          <div>
            card pokemon
          </div>
          </>
        )
      }

    </main>
  )
}
