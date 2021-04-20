import styled from "styled-components"
import {Button} from "@material-ui/core" 

export const DivContainer = styled.div`
    * {margin: 0;
    padding: 0;
    box-sizing: border-box;}
    display: flex;
    width: 200px;
    background-color: #cccccc;
    flex-direction: column;
    align-items: center;
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