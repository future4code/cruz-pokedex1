import React from "react"
import {DivPowerCards} from "../../globalStyled"
import {useHistory} from 'react-router-dom'

export const PowersCard = ({powers}) => {
    const history = useHistory();
    return <DivPowerCards>
        <h1>Poderes</h1>
        {powers.map((item) => {
            return ( <h3><span>{item.name}: </span></h3>)
        })}
</DivPowerCards>
}