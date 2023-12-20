import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { SimplePokemon } from '../interfaces/simple-pokemon';
import { IoHeartHalfOutline } from 'react-icons/io5';

interface Props {

    pokemon: SimplePokemon;

}

export const PokemonCard = ({ pokemon }: Props) => {

    const { id, name } = pokemon;

    return (
        <>

            <div className="mx-auto right-0 mt-2 w-60">
                <div className="bg-white rounded overflow-hidden shadow-lg">
                    <div className="text-center p-6 bg-gray-800 border-b">
                        <Image
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                            alt={name}
                            width={200}
                            height={170}
                            layout="responsive"
                             />

                        <p className="pt-2 text-lg font-semibold text-gray-50">{name}</p>
                      
                        <div className="mt-5">
                            <Link href="/pokemon/[id]" as={`/pokemon/${id}`} className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-xs font-semibold text-gray-100 mr-2">                             
                                <span>View</span>
                            </Link>
                        </div>
                    </div>
                    <div className="border-b">
                        <Link href="/dashboard/main" className="px-4 py-2 hover:bg-gray-100 flex" >

                            <div className="text-red-500">
                            <IoHeartHalfOutline className="w-5 h-5" />
                            </div>
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">
                                    Campaigns
                                </p>                                
                            </div>

                        </Link>
                     
                    </div>


                </div>
            </div>
        </>
    )
}


{/*{pokemon.map((poke) => (
    <div classNameName="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2" key={poke.id}>
         <div classNameName="bg-white rounded-lg shadow-lg overflow-hidden">
            <div classNameName="bg-gray-200 h-50 w-full flex items-center justify-center">
                <Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`}
                    alt={poke.name}
                    width={200}
                    height={170}
                    layout="responsive"
                />
            </div>
            <div classNameName=" first-letter:capitalize   text-center">
                <h2 classNameName="text-2xl font-bold text-gray-800"> {poke.name}</h2>

            </div>
        </div> */}