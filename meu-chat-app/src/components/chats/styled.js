import styled from "styled-components";
export const Container = styled.div`
    height: calc( 100vh - 70px );
    overflow: auto;
    &::-webkit-scrollbar{
        width: 9px;
        border-radius: 10px;

    }
    &::-webkit-scrollbar-button{
        border-radius: 10px;
        background-color: rgba(0,0,0,0.2);
    }
`


export const Chats = styled.div`

`
export const Chatsdiv = styled.div`
    margin: 0 10px;
    border-top: solid 3px #ccc;
`
