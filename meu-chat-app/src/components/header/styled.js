import styled from "styled-components";
export const Container = styled.div`
    height: 60px;
    background-color: antiquewhite;
    padding: 10px 16px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
    box-shadow:  0 2px 2px #0003;
    display: flex;
`

export const Avatar = styled.img`
    width: 35px;
    height: 35px;
    cursor: pointer;
    border-radius: 50%;
`
export const Options = styled.div`
    display: flex;
    gap: 10px;

    svg{
        width: 35px;
        height: 35px;
        color: aqua;
        cursor: pointer;
    }
`
