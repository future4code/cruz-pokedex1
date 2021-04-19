import React from "react"
import {DivContainer, Icon, Img} from "./styled"
import pokemon from "../../img/pokemon.png"
import icon from "../../img/icon.png"

export const Header = () => {
    return <DivContainer>
            <Icon src={icon} /> 
            <Img src={pokemon} />
            <p></p>
    </DivContainer>
}