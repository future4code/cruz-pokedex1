import React, { useContext, useState } from "react"
import {Header} from "../../components/header/Header"
import {DivContainer, ListPokemons} from './styled'
import {PokeCard} from "../../components/pokecard/PokeCard"
import GlobalStateContext from "../../global/GlobalStateContext"
import {Snackbar} from "@material-ui/core"
import {DivBattle} from "../../globalStyled"

const ListPokemon = () => {
    const {pokedex, setPokedex} = useContext(GlobalStateContext)
    const [power, setPower] = useState([])
    const [winnerIndex, setWinnerIndex] = useState(-1)
    const removeToPokedex = (poke) => {
        const newPokedexList = [...pokedex]
        const index = pokedex.findIndex((item) => {
            return item.name === poke.name
         })
        newPokedexList.splice(index, 1)
        setPokedex(newPokedexList)
    }

    const comparePowerOfBattle = (powerOfBattle, name, photo) => {
        if (power.length === 0){
        setPower([{powerOfBattle, name, photo}])
    } else {
        setPower([...power, {powerOfBattle, name, photo}])
        if (power[0].name === name) {
            alert("O pokemon está batalhando com ele mesmo??? maldade poxa!!!")
        } else if (power[0].powerOfBattle > powerOfBattle) {
            setWinnerIndex(0)
        } 
        else if (power[0].powerOfBattle < powerOfBattle){
            setWinnerIndex(1)
        }else{
            setWinnerIndex(2)
        }
        setTimeout(() => {
        setWinnerIndex(-1)
        setPower([])}, 3000)
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
    <div>
      <Snackbar
        anchorOrigin={{ vertical:'top', horizontal:'center' }}
        open={power.length > 0}
       // onClose={handleClose}
        message={
        <DivBattle>
            <div>
            {power.length > 0 && <div>
                <img src={power[0].photo}/>
                <h2>{power[0].name}</h2>
            </div>}
            <h1>Vs</h1>
            {power.length > 1 && <div>
                <img src={power[1].photo}/>
                <h2>{power[1].name}</h2>
            </div>}
            </div>
            <div id={'winner'}>
            {(winnerIndex === 0 || winnerIndex === 1) && <p>{power[winnerIndex].name} é o Grande Vencedor!!!</p>}
            {(winnerIndex === 2) && <p>Empatou!!!</p>}
            </div>
        </DivBattle>
        }
      />
    </div>
</DivContainer>
}

export default ListPokemon;