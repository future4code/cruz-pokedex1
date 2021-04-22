
import React from "react";
import Router from "../src/router/Router";
import { theme } from "../src/Theme";
import { ThemeProvider } from "@material-ui/styles";
import styled from 'styled-components'
import PokeHollow from './fonts/PokemonHollow.ttf'
import PokeSolid from './fonts/PokemonSolid.ttf'
import GlobalState from "./global/GlobalState"


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


  
  return (
    <GlobalState>
    <Bory>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
    </Bory>
    </GlobalState>
  )
}

export default App;
