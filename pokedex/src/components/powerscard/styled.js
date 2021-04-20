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
