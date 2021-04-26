import React, {useContext, useState} from "react"
import {PokeCard} from "../../components/pokecard/PokeCard"
import {Header} from "../../components/header/Header"
import styled from "styled-components"
import GlobalStateContext from "../../global/GlobalStateContext";
import Pagination from '@material-ui/lab/Pagination';

const DivContainer = styled.div`
`
const ListPokemons = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`
const DivPagination = styled.div`
    display: flex;
    justify-content: center;
    margin: 18px;
`

const Home = () => {
    const { pokemons, pokedex, setPokedex, pagination, setPagination } = useContext(GlobalStateContext);

    const handleChange = (event, value) => {
        setPagination(value);
    };

    const addToPokedex = (poke) => {
    const newPokedexList = [...pokedex, poke];
    const orderedPokedex = newPokedexList.sort((a, b) => {
    return a.id - b.id;
    });
    setPokedex(orderedPokedex)
    }

    const removeToPokedex = (poke) => {
        const newPokedexList = [...pokedex]
        const index = pokedex.findIndex((item) => {
            return item.name === poke.name
         })
        newPokedexList.splice(index, 1)
        const orderedPokedex = newPokedexList.sort((a, b) => {
            return a.id - b.id;
            });
        setPokedex(orderedPokedex)
    }

    const isInPokedex = (poke) => {
       const index = pokedex.findIndex((item) => {
           return item.name === poke.name
        })
        return index > -1
    }

    return <DivContainer>
        <Header page="Home" />
        <ListPokemons>
       {pokemons.map((item) => {
           const isInPoke = isInPokedex(item) 
              return (<PokeCard 
                photo={item.sprites.front_default} 
                name={item.name} 
                pokedex={item.pokedex} 
                addToPokedex={() => addToPokedex(item)} 
                isInPokedex = {isInPoke} 
                removeToPokedex = {() => removeToPokedex(item)}
                powers={item.stats}
                > </PokeCard>)
       })
       }
       
       </ListPokemons>
       <DivPagination>
      <Pagination color="primary" count={38} page={pagination} onChange={handleChange} />
      </DivPagination>
    </DivContainer>
}

export default Home;