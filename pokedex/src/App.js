
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
  //const [pokemonsName, setPokemonsName] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [cont, setCont] = useState(0);

  const getPokemonsName = () => {
    axios.get(`${baseUrl}/pokemon?limit=20&offset=0`)
    .then(res =>{
      //setPokemonsName(res.data.results)
      getPokemons(res.data.results);
    })
    .catch(err => {
      console.log(err);
    })
  } 

  const getPokemons = (pokedex) => {
    let newList = []; 
    pokedex.forEach((item) => {
    
      axios.get(`${baseUrl}/pokemon/${item.name}`)
      .then(res =>{
          // console.log(res.data)
          newList = [...newList, res.data]
          newList = newList.sort((a, b) => 
          {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)}
          )
          setPokemons([...newList])
      })
      .catch(err => {
        console.log(err);
      })
    })
  }
  useEffect(()=>{
    getPokemonsName();
  }, [])

  return (
    <Bory>
      <PokemonsContext.Provider value={pokemons}>{
      // console.log(pokemons)
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
