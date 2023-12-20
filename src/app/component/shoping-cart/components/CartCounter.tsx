"use client"

import React from 'react'
import { useState } from "react";

interface Props {

    value: number;


}

export const CartCounter = ({ value = 2}: Props) => {
    

    const [count, setCount] = useState(value);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <>
            <div className="flex justify-center items-center">
                <button className="bg-blue-500 text-white px-2 py-1 rounded-md" onClick={increment}
                >+</button>
                <span className="px-2 py-1 bg-blue-500 text-white rounded-md">{count}</span>
                <button className="bg-blue-500 text-white px-2 py-1 rounded-md" onClick={decrement}
                >-</button>
            </div>
        </>
    )
}
