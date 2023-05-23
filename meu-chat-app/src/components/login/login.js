import React from 'react';
import { auth, provider } from "../../Services/firebase";
import * as S from "./styled";

const Login = () => {
    const handleSignin = () => {
        auth.signInWithPopup(provider).catch(alert);
    }
    return (
        <S.Container>
            <S.Button onClick={handleSignin}>Login com google</S.Button>
        </S.Container>
    );
};



export default Login;