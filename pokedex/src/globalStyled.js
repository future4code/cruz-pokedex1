import styled from "styled-components"
import {Button} from "@material-ui/core" 
const colorPrimary = "ff0000"
const colorSecondary = '2979ff'
const themeyellow = "2e4494"
export const DivContainerHome = styled.div`
    * {
        margin: 0;
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
    box-sizing: border-box;
    }
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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 600px;
    span{
        color:  #${colorPrimary};
    }
    h1{
        align-self: center;
        font-family: 'pokeSolid';
        color: #fdc00d;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #2e4494;
        
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    }
    h3{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 15px 0 10px 0;
        padding: 10px 0px 0px 0px;
    }
`
export const DivAtacksCards = styled(DivPowerCards)`
    width: 400px;
    margin-top: 10px;
    h3{
        margin:0;
        padding: 5px;
    }
    h1{
        margin-bottom: 20px;
    }
`
export const DetailsCard = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
height: 100vh;
* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`
export const DivImgCards = styled.div`
#divImg{
height: 300px;
width: 300px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
img{
    width: 100%;
    height: 100%;
}
}
h1{
    font-family: 'pokeSolid';
    color: #fdc00d;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #2e4494;
    text-align: center;
}
h2{
    text-align: center;
}
`
export const ButtonGroupDetails = styled.div`
width: 300px;
height: 150px;
display: flex;
flex-wrap: wrap;
input{
    display: none;
}
div{
    width: 25%;
}
label{
    width: 100%;
height:100%;
}
img{
    height:100%;
    /* background-size: 200%; */
    cursor: pointer;
    border: 1px solid black;
    width: 100%;
}
div:nth-of-type(2n){
    >label > img{
            background-color: #${colorPrimary}40;
    border-color: #${colorPrimary};
    :hover{
        background-color: #${colorPrimary}80;
    }
    }
    input:checked ~ label img{
        background-color: #${colorPrimary}aa;
    }
}

div:nth-of-type(2n + 1) {
    >label > img{
        background-color: #${colorSecondary}40;
    border-color: #${colorSecondary};
    :hover{
        background-color: #${colorSecondary}80;
    }
    }
    input:checked ~ label img{
        background-color: #${colorSecondary}aa;
    }
}

`
export const Title = styled.h1`
    width: 100%;
    font-family: 'pokeSolid';
    color: #fdc00d;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #2e4494;
    font-size: 70px;
    text-align: center;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
`
