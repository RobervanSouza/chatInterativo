import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../Services/firebase";
import * as S from "./style";
import { MdPerson } from "react-icons/md";

const getUser = (users, userLogged) =>
  users?.filter((user) => user !== userLogged?.email)[ 0 ];

const ChatsItem  = ({ id, users, user, setUserChat, active }) => {
  const email = getUser(users, user);
  const [ getUserItem ] = useCollection(
    db.collection("users").where("email", "==", email)
  );

   const Avatar = getUserItem?.docs?.[ 0 ]?.data();
   const nome = getUserItem?.docs?.[ 0 ]?.data();
   const item = getUser(users, user);

 const handleNewChat = () => {
  if (item && Avatar) {
    const name = item.split("@")[0]; // Verifica se 'item' é definido antes de acessar 'split'
    const userChat = {
      chatId: id,
      name: name,
      photoURL: Avatar?.photoURL,
    };

    setUserChat(userChat);
  }
};


  return (
    <S.Container onClick={handleNewChat} className={active}>
      {Avatar ? <S.Avatar src={Avatar?.photoURL} /> : <MdPerson />}
      <S.Nome>{item.split("@")[0]}</S.Nome>
    </S.Container>
  );
};

export default ChatsItem ;
