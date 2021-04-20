
import React from "react";
import Router from "../src/router/Router";
import { theme } from "../src/Theme";
import { ThemeProvider } from "@material-ui/styles";
import styled from 'styled-components'
import PokeHollow from '../src/fonts/PokemonHollow.ttf'
import PokeSolid from '../src/fonts/PokemonSolid.ttf'

const Bory = styled.div`

`
function App() {
  return (
    <Bory>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Bory>
  )
}

export default App;
