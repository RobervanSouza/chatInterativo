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
    .where("users", "array-contains", user.email);
  const [ emailLogado ] = useCollection(chat);

  return (
    <S.Container>
      {emailLogado?.docs.map((item, index) => {
        const users = item.data().users;
        const emailCadastrado = users.find((email) => email !== user.email);
        const name = item.data().names;
        const nome = name.find((email) => email !== user.email);
        console.log(name, "aqui esta o array de nomes")
       
      

        return (
          <S.Chats key={index}>
            <ChatsItem
              id={item.id}
              users={users}
              user={user}
              setUserChat={setUserChat}
              active={userChat?.chatId === item.id ? "active" : ""}
              userName={emailCadastrado} // Passar o email cadastrado como prop
            />
            <S.Chatsdiv />
          </S.Chats>
        );
      })}
    </S.Container>
  );
}

export default Chats;
