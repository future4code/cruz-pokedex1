import React from "react"
import {DivContainer} from "./styled"
import {useHistory} from 'react-router-dom'

export const PowersCard = ({powers}) => {
    const history = useHistory();
    return <DivContainer>
        <h1>Poderes</h1>
        {powers.map((item) => {
            return ( <h3><span>{item.stat.name}: </span>{item.base_stat}</h3>)
        })}
</DivContainer>
}