import React from "react"
import {DivContainer, Icon, Img} from "./styled"
import pokemon from "../../img/pokemon.png"
import iconList from "../../img/icon.png"
import iconHome from "../../img/iconHome.png"
import {useHistory} from 'react-router-dom'
import {goToHome, goToListPokemon} from '../../router/coordinator'

export const Header = ({page}) => {
    const homeCurrent = page === "Home" ? iconList  : iconHome;
    const functionIcon = page === "Home" ? goToListPokemon : goToHome;
    const history = useHistory();
    return <DivContainer>
        <div>
            <Icon src={homeCurrent} onClick={() => functionIcon(history)}/> 
        </div>
        <div>
            <Img src={pokemon} />
        </div>
        <div>
            
        </div>
    </DivContainer>
}