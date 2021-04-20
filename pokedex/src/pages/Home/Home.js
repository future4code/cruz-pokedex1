import React, {useContext} from "react"
import {PokeCard} from "../../components/pokecard/PokeCard"
import {Header} from "../../components/header/Header"
import styled from "styled-components"
import PokemonsContext from "../../contexts/PokemonsContext";
import { ListItemText } from "@material-ui/core";
import ListPokemon from "../ListPokemon/ListPokemon";
import {ListPokemons, DivContainerHome } from "../../globalStyled"
const Home = () => {
    const pokemons  = useContext(PokemonsContext);
    return <DivContainerHome>
        <Header page="Home" />
        <ListPokemons>
       { pokemons.map((item) => {
             console.log(item) 
             return (<PokeCard photo={item['sprites'].front_default} name={item['name']}> </PokeCard>)
       })
       }
       </ListPokemons>
    </DivContainerHome>
}

export default Home;