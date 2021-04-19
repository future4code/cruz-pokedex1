import React from "react"
import {PokeCard} from "../../components/pokecard/PokeCard"
import {Header} from "../../components/header/Header"
import styled from "styled-components"

const DivContainer = styled.div`
    * {margin: 0;
    padding: 0;
    box-sizing: border-box;}
`

const Home = () => {
    return <DivContainer>
        <Header page="Home" />
        <PokeCard> </PokeCard>
    </DivContainer>
}

export default Home;