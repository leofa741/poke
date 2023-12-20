import { PokemonResponse } from '@/app/pokemons/interfaces/pokemon-response';
import { SimplePokemon } from '../../pokemons/interfaces/simple-pokemon';
import Image from 'next/image';
import { Pokemongrid } from '@/app/pokemons/component/Pokemongrid';




const getPokemon = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {

    const response: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then((res) => res.json())

    const pokemons = response.results.map(poke => ({
        id: Number(poke.url.split('/')[6]),
        name: poke.name,
    }))

    console.log(response);
    return pokemons;
};



export default async function PokePage() {

    const pokemon = await getPokemon(151);

    return (
        <>
            <div className="flex flex-col">

                <Pokemongrid pokemon={pokemon} />
               
            </div>
        </>
    );
}