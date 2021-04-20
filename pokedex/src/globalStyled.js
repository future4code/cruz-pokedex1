import styled from "styled-components"
import {Button} from "@material-ui/core" 

export const DivContainerHome = styled.div`
    * {margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
   display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const ListPokemons = styled.div`
display: flex;
flex-wrap: wrap;
`

export const DivContainerCard = styled.div`
    * {margin: 0;
    padding: 0;
    box-sizing: border-box;}
    display: flex;
    width: 200px;
    background-color: #cccccc;
    flex-direction: column;
    align-items: center;
    margin: 10px;
`

export const Button2 = styled(Button)`
    width:49.7%;
`

export const DivButtons = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`

export const Img = styled.img`
    min-height: 80%;
`

export const DivImage = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DivPowerCards = styled.div`
    * {margin: 0;
    padding: 0;
    box-sizing: border-box;}
    display: flex;
    width: 300px;
    background-color: #cccccc;
    flex-direction: column;
    align-items: flex-start;
    padding: 4px;
    span{
        color: red;
    }
    h1{
        align-self: center;
        font-family: 'pokeSolid';
        color: #fdc00d;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #2e4494;
    }
`