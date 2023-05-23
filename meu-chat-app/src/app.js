
import React, { useEffect, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./Services/firebase";
import Login from './components/login/login';
import Loading from './components/loading/loading';
import BaraUsuarios from './components/BarraUsers/baraUsuarios';
import * as S from "./style/styledApp";
export const App = () => {
  const [ user, loading ] = useAuthState(auth);
  const [userchat, setUserchat] = useState(null);



  useEffect(() => {
    if (user) {
      db.collection('users').doc(user.uid).set({
        email: user.email,
        photoURL: user.photoURL,
      });
    }


  }, [ user ]);

  if (loading) return <Loading />
  if (!user) return <Login />

  return (
    <>
      <S.Container>
        <BaraUsuarios setUserChats={setUserchat} userChat={userchat} />
      </S.Container>
    </>
  )
}
