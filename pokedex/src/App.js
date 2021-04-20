
import React, {useEffect, useState} from "react";
import Router from "../src/router/Router";
import { theme } from "../src/Theme";
import { ThemeProvider } from "@material-ui/styles";
import styled from 'styled-components'
import PokeHollow from './fonts/PokemonHollow.ttf'
import PokeSolid from './fonts/PokemonSolid.ttf'
import axios from 'axios'
import {baseUrl} from '../src/constants/urls'
import PokemonsContext from './contexts/PokemonsContext'

const Bory = styled.div`
@font-face {
   font-family: 'pokeHollow';
   src: url('${PokeHollow}');
    }
    @font-face {
  font-family: "pokeSolid";
  src: url('${PokeSolid}');
}
`
function App() {
  const [pokemonsName, setPokemonsName] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [required, setRequired] = useState(false);

  const getPokemonsName = () => {
    setRequired(false)
    axios.get(`${baseUrl}/pokemon?limit=20&offset=0`)
    .then(res =>{
      setPokemonsName(res.data.results)
      setRequired(true)
    })
    .catch(err => {
      console.log(err);
    })
  } 
  const getPokemons = (name) => {
    axios.get(`${baseUrl}/pokemon/${name}`)
    .then(res =>{
        console.log(res.data)
        return res.data;
    })
    .catch(err => {
      console.log(err);
    })
  }
  useEffect(()=>{
    getPokemonsName();
  }, [])
  useEffect(()=>{
    const newList = []; 
    pokemonsName.forEach((item) => {
     
      axios.get(`${baseUrl}/pokemon/${item.name}`)
      .then(res =>{
          // console.log(res.data)
          newList.push(res.data)
      })
      .catch(err => {
        console.log(err);
      })
    })
  
    setPokemons(newList)
  }, [required])

  return (
    <Bory>
      <PokemonsContext.Provider value={pokemons}>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </PokemonsContext.Provider>
    </Bory>
  )
}

export default App;
