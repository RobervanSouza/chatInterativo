import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../Services/firebase";
import * as S from "./style";
import { MdPerson } from "react-icons/md";

const getUser = (users, userLogged) =>
  users?.filter((user) => user !== userLogged?.email)[ 0 ];

const ChatsItem = ({ id, users, user, setUserChat, active }) => {
  const email = getUser(users, user);
  const [ userDoc, setUserDoc ] = useState(null);
  const item = getUser(users, user);

  useEffect(() => {
    const unsubscribe = db.collection("names").doc(email).onSnapshot((snapshot) => {
      const userData = snapshot.data();
      setUserDoc(userData);
    });

    return () => unsubscribe();
  }, [ email ]);

  const handleNewChat = () => {
    if (item && userDoc) {
      const name = userDoc.name || item.split("@")[ 0 ];
      const userChat = {
        chatId: id,
        name: name,
        photoURL: userDoc?.photoURL,
      };

      setUserChat(userChat);
    }
  };

  return (
    <S.Container onClick={handleNewChat} className={active}>
      {userDoc && userDoc.photoURL ? (
        <S.Avatar src={userDoc.photoURL} />
      ) : (
        <MdPerson />
      )}
      <S.Nome>{userDoc?.names || item.split("@")[ 0 ]}</S.Nome>
    </S.Container>
  );
};

export default ChatsItem;