import React from "react"
import {DivContainerCard, Button2, DivButtons, Img, DivFrontBack, Information, DivImg} from "../../globalStyled"
import {goToDetails} from '../../router/coordinator'
import {useHistory} from 'react-router-dom'
import {IconButton, LinearProgress} from '@material-ui/core'
import {AddCircle, Assignment, RemoveCircleRounded} from '@material-ui/icons'

export const PokeCard = ({name, photo, addToPokedex, isInPokedex, removeToPokedex, powers}) => {
    const history = useHistory();

    return <DivContainerCard>
        <DivFrontBack>
            <div className="cartao">
                 <div className="cartao-container">
                    <DivImg className="cartao-front">
                        <Img src={photo}/> 
                    </DivImg>
                    <Information className="cartao-back">
                    {powers && powers.map((item) => {
                         const percent = item.base_stat/2 > 100 ? 100 : item.base_stat/2; 
                            console.log(item.base_stat)
                        return (<div>
                            <div className="text">
                         <h6>{item.stat.name}</h6>
                         <h6>{item.base_stat}</h6>
                         </div>
                        <LinearProgress variant="buffer" 
                        value={percent}  valueBuffer={100} />
                        </div>
                        )
                    })
                    }
                    </Information>
                    
                </div>
            </div>
        </DivFrontBack>
        <h3>{name}</h3>
        <DivButtons>

 
        {(isInPokedex) && 
            <IconButton aria-label="add to shopping cart">                  
                 <RemoveCircleRounded  color="primary" fontSize="large" onClick={() => removeToPokedex()} style={{ fontSize: 50 }}/>
            </IconButton>}

        {(addToPokedex && !isInPokedex) && <IconButton color="secondary" aria-label="add to shopping cart">
                <AddCircle  id="buttonBlue" fontSize="large"  onClick={() => addToPokedex()} style={{ fontSize: 50 }}/>
            </IconButton>}
      
            <IconButton color="secondary" aria-label="add to shopping cart" onClick={() => goToDetails(history, name)} >
            <Assignment color="secondary" fontSize="large" style={{ fontSize: 50 }}/>
            </IconButton>

        </DivButtons>
</DivContainerCard>
}