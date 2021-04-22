import React, {useContext} from "react"
import {PokeCard} from "../../components/pokecard/PokeCard"
import {Header} from "../../components/header/Header"
import styled from "styled-components"
import PokemonsContext from "../../contexts/PokemonsContext";

const DivContainer = styled.div`
    * {margin: 0;
    padding: 0;
    box-sizing: border-box;}
`
const ListPokemons = styled.div`
display: flex;
flex-wrap: wrap;
`
const Home = () => {
    const pokemonsContext = useContext(PokemonsContext);
    return <DivContainer>
        <Header page="Home" />
        <ListPokemons>
       {pokemonsContext.map((item) => {
              return (<PokeCard photo={item.sprites.front_default} name={item.name} pokedex={item.pokedex}> </PokeCard>)
       })
       }
       </ListPokemons>
    </DivContainer>
}

export default Home;