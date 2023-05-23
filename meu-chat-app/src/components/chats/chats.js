import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../Services/firebase";
import * as S from "./styled";
import { useCollection } from "react-firebase-hooks/firestore";
import ChatsItem from "../ChatsIte/chatItem";

const Chats = ({ setUserChat, userChat }) => {


  const [ user ] = useAuthState(auth);
  const chat = db
    .collection("chats")
    .where("users", "array-contains", user.email)
  const [ emailLogado ] = useCollection(chat)

  return (
    <S.Container>
      {emailLogado?.docs.map((item, index) => (
        <S.Chats key={index} >
          <ChatsItem 
          id={item.id}
          users={item.data().user}
          user={user}
          setUserChat={setUserChat}
          active={userChat?.chatId === item.id ? "active" : ""} 
          />
          <S.Chatsdiv/>
        </S.Chats> 
      ))}
    </S.Container>
  )
}

export default Chats;
