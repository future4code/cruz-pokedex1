import styled from "styled-components"
import {Button} from "@material-ui/core" 
const colorPrimary = "ff0000"
const colorSecondary = '2979ff'
const themeyellow = "fdc00d"
const themeblue = "2e4494"

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
    width: 250px;
    background-color: #dddddd;
    border-radius: 25px;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    h3{
        text-transform: capitalize;
        text-align: center;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const Button2 = styled(Button)`
    width:49.7%;
`

export const DivButtons = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
> div button path {
    font-size: 500px !important;
    }
#buttonYellow{
    color: #${themeyellow};
}
#buttonBlue{
    color: #${themeblue};
}
`
export const Img = styled.img`
    min-height: 80%;
    
`
export const DivImg = styled.div`
    position: absolute;   
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #ffffffaa;
`
export const Information = styled.div`
    padding: 10px;
    display: flex;
    align-items: stretch;
    justify-content: center;   
    flex-direction: column;
    background-color: #ffffffaa;
    .text{
        margin-top: 4px;
        display: flex;
    align-items: center;
    justify-content: space-between;
    }
   
`
export const DivFrontBack = styled.div`
.cartao {
		width: 220px;
	height: 220px;
 	perspective: 100%;
     margin: 10px;
     box-sizing: border-box;
}
.cartao-container {
	position: relative;
	height: 100%;
	transition: transform .6s;
	transform-style: preserve-3d;
}
.cartao:hover .cartao-container {
	transform: rotateY(180deg);
}
.cartao-front, .cartao-back {
	position: absolute;
	width: 100%;
	height: 100%;
	backface-visibility: hidden;
	z-index: 1;
    border-radius: 20px;
}
.cartao-back {
	transform: rotateY(180deg);
}  
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

export const BattleImg = styled.img`
    width: 50px;
    height: 50px;
`

export const H4 = styled.h4`
    margin-top: 24px;
`

export const DivBattle = styled.div `
display: flex;
flex-direction: column;
> div {
display: flex;
align-items: center;
justify-content: center;
width: 300px;
align-self: center;

 > div {
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     margin: 0 18px;
 }
 h1 {
     font-family: 'pokeHollow';
 }
img {
    width: 70px;
    height: 70px;
    background-color: white;
    border-radius: 5px;
}
h2 {
    text-transform: capitalize;
}
}
#winner {
    width: 100%;
    text-align: center;
    text-transform:capitalize;
}
`
