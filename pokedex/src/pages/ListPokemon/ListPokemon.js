import React, { useContext, useState } from "react"
import {Header} from "../../components/header/Header"
import {DivContainer, ListPokemons} from './styled'
import {PokeCard} from "../../components/pokecard/PokeCard"
import GlobalStateContext from "../../global/GlobalStateContext"

const ListPokemon = () => {
    const {pokedex, setPokedex} = useContext(GlobalStateContext)
    const [power, setPower] = useState()

    const removeToPokedex = (poke) => {
        const newPokedexList = [...pokedex]
        const index = pokedex.findIndex((item) => {
            return item.name === poke.name
         })
        newPokedexList.splice(index, 1)
        setPokedex(newPokedexList)
    }

    const comparePowerOfBattle = (powerOfBattle, name) => {
        if (!power){
        setPower({powerOfBattle, name})
    } else {
        if (power.powerOfBattle > powerOfBattle) {
            alert(`${power.name} ganhou!`)
        } else if (power.name === name) {
            alert("O pokemon está batalhando com ele mesmo??? maldade poxa!!!")
        } 
        else {
            alert(`${name} ganhou!`)
        }
        setPower()
    }
    }

    return  <DivContainer>
    <Header page="List" />
    <ListPokemons>
    {pokedex &&
        pokedex.map((item) => {
            return (<PokeCard photo={item.sprites.front_default} 
                name={item.name} pokedex={item.pokedex} 
                isInPokedex = {true} 
                removeToPokedex={() => removeToPokedex(item)} 
                powers={item.stats}
                comparePowerOfBattle = {comparePowerOfBattle}
                > 
                </PokeCard>)
        })
    }
    </ListPokemons>
</DivContainer>
}

export default ListPokemon;