import React from "react"
import {DivContainer, Button2, DivButtons, Img, DivImage} from "./styled"

export const PokeCard = () => {
    return <DivContainer>
        <DivImage>
        <Img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"} />
        </DivImage>
        <h3>Bulbassauro</h3>
        <DivButtons>   
        <Button2 color="secondary" variant="contained">Adicionar</Button2>   
        <Button2 color="secondary" variant="contained"> Detalhes </Button2> 
        </DivButtons>
</DivContainer>
}