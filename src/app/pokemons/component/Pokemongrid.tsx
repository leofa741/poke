import React from 'react'

import { SimplePokemon } from '../interfaces/simple-pokemon';
import Link from 'next/link';
import { PokemonCard } from './PokemonCard';
interface Props {

    pokemon: SimplePokemon[];
}

export const Pokemongrid = ({ pokemon }: Props) => {
    return (
        <>
            <div className="flex flex-wrap">

               
                        {pokemon.map((poke) => ( 

                             <PokemonCard key={poke.id} pokemon={poke} />
                            
                         
                        ))}

                    </div>
            
        </>
    )
}