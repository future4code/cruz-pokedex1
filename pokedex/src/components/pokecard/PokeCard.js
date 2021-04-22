import React from "react"
import {DivContainerCard, Button2, DivButtons, Img, DivImage} from "../../globalStyled"
import {goToDetails} from '../../router/coordinator'
import {useHistory} from 'react-router-dom'

export const PokeCard = ({name, photo, addToPokedex, isInPokedex, removeToPokedex}) => {
    const history = useHistory();

    return <DivContainerCard>
        <DivImage>
        <Img src={photo}/>
        </DivImage>
        <h3>{name}</h3>
        <DivButtons>

        
        {(isInPokedex) && <Button2 color="primary" variant="contained" size="small" onClick={() => removeToPokedex()}>Remover</Button2>}
        {(addToPokedex && !isInPokedex) && <Button2 color="secondary" variant="contained" size="small" onClick={() => addToPokedex()}>Adicionar</Button2>}



      
        <Button2 color="secondary" variant="contained" size="small"  onClick={() => goToDetails(history, name)}> Detalhes </Button2> 




        </DivButtons>
</DivContainerCard>
}