import React from "react"
import {DivContainer, Button2, DivButtons, Img, DivImage} from "./styled"
import {goToDetails} from '../../router/coordinator'
import {useHistory} from 'react-router-dom'

export const PokeCard = () => {
    const history = useHistory();
    return <DivContainer>
        <DivImage>
        <Img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"}/>
        </DivImage>
        <h3>Bulbassauro</h3>
        <DivButtons>   
        <Button2 color="secondary" variant="contained" size="small"  >Adicionar</Button2>   
        <Button2 color="secondary" variant="contained" size="small"  onClick={() => goToDetails(history, "as")}> Detalhes </Button2> 
        </DivButtons>
</DivContainer>
}