import styled from "styled-components"

export const DivContainer = styled.div`
    width: 100%;
    height: 10vh;
    background-color: #ff000099;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }
    > div:nth-of-type(2){
        justify-content: center;
    }
`



export const Img = styled.img`
    height: 130%;
`

export const Icon = styled.img`
    height: 80%;
    :hover {
        cursor: pointer;
    }
`