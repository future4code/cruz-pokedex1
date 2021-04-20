import React from "react"
import {DivContainer, Button2, DivButtons, Img, DivImage} from "./styled"
import {goToDetails} from '../../router/coordinator'
import {useHistory} from 'react-router-dom'

export const PokeCard = ({name, photo}) => {
    const history = useHistory();
    console.log(name, photo)
    return <DivContainer>
        <DivImage>
        <Img src={photo}/>
        </DivImage>
        <h3>{name}</h3>
        <DivButtons>   
        <Button2 color="secondary" variant="contained" size="small"  >Adicionar</Button2>   
        <Button2 color="secondary" variant="contained" size="small"  onClick={() => goToDetails(history, "as")}> Detalhes </Button2> 
        </DivButtons>
</DivContainer>
}