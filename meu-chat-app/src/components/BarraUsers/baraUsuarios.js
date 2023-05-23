import React from 'react'
import * as S from "./styels";
import Header from '../header/header';
import Chats from '../chats/chats';
const BaraUsuarios = ({ setUserChats, userChat }) => {
  return (
   <>
    <S.Container>
     <Header setUserchat={setUserChats} />
     <Chats setUserchat={setUserChats} userChat={userChat} />
    </S.Container>
   </>
  )
}

export default BaraUsuarios;
