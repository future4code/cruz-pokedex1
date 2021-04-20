import React from "react"
import {DivContainer} from "./styled"
import {useHistory} from 'react-router-dom'

export const PowersCard = () => {
    const history = useHistory();
    return <DivContainer>
        <h1 className="fontPoke">Poderes</h1>
       <h3><span>hp:</span> 60</h3>
       <h3><span>attack:</span> 62</h3>
       <h3><span> defense:</span> 63</h3>
       <h3><span> special-attack:</span>  80</h3>
       <h3><span> special-defense:</span>  80</h3>
       <h3><span> speed:</span> 60</h3>
</DivContainer>
}