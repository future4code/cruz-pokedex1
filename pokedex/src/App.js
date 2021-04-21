
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
  const [pokemonsInfos, setPokemonsInfos] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [cont, setCont] = useState(0);

  useEffect(() => {
    getPokemonsInfos()
  },[])

  const getPokemonsInfos = () => {
    axios.get(`${baseUrl}/pokemon?limit=20&offset=0`)
    .then(res =>{
      setPokemonsInfos(res.data.results);
    })
    .catch(err => {
      console.log(err);
    })
  } 

  useEffect(() => {
    const newList = []
    pokemonsInfos.forEach((item) => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
      .then((res) => {
        newList.push(res.data)
        if (newList.length === 20) {
          const orderedList = newList.sort((a, b) => {
            return a.id - b.id;
          });
          setPokemons(orderedList);
        }
      })
    })
}, [pokemonsInfos])

  
  return (
    <Bory>
      <PokemonsContext.Provider value={pokemons}>{
      }
      {pokemons.length}
      <button onClick={() => setCont(cont + 1)}>sd</button>
      {cont}
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </PokemonsContext.Provider>
    </Bory>
  )
}

export default App;
