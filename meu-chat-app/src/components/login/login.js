import React from 'react';
import { auth, provider } from "../../Services/firebase";
import * as S from "./styled";

const Login = ({ setUser }) => {
    const handleSignin = () => {
        auth.signInWithPopup(provider).then((result) => {
            const user = result.user;
            const displayName = user.displayName;
            const email = user.email;
            setUser({ displayName, email });
        }).catch(alert);
    }

    return (
        <S.Container>
            <S.Button onClick={handleSignin}>Login com Google</S.Button>
        </S.Container>
    );
};

export default Login;
