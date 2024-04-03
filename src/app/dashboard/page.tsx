"use client"
import { Heading, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'

export default function page() {
  const [frase, setFrase] = useState("")
 async function getFrase(){
    const numeroAleatorio = Math.floor(Math.random() * 5) + 1;
    const response = await axios.get("http://localhost:3000/api/getFrase?id="+ numeroAleatorio)
    setFrase(response.data.frase)
  }
 
  return (
    <div className='flex flex-col items-center justify-center m-10 gap-2'>
        <Heading color="coral">Me encuentro en mi dashboard</Heading>
        <Text fontSize='2xl'>{frase}</Text>
        <button onClick={getFrase} className='py-1 px-2 bg-fuchsia-300 rounded text-white'>Frase motivacional</button>
    </div>
  )
}
