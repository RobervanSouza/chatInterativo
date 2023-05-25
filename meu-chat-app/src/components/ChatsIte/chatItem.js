import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../Services/firebase";
import * as S from "./style";
import { MdPerson } from "react-icons/md";

// Função auxiliar para obter o usuário do chat
const getUser = (users, userLogged) =>
  users?.filter((user) => user !== userLogged?.email)[ 0 ];

const ChatsItem = ({ id, users, user, setUserChat, active }) => {
  const email = getUser(users, user); // Obtém o e-mail do usuário no chat
  const [ userDoc, setUserDoc ] = useState(null); // Estado para armazenar os dados do usuário
  const item = getUser(users, user); // Obtém o usuário como item da lista

  useEffect(() => {
    // Configura o efeito colateral para ouvir alterações no documento do chat
    const unsubscribe = db.collection("chats").doc(id).onSnapshot((snapshot) => {
      const chatData = snapshot.data();
      const userIndex = chatData.users.indexOf(email); // Encontra o índice do usuário no array de usuários

      if (userIndex > -1) {
        const name = chatData.names[ userIndex ]; // Obtém o nome do usuário com base no índice
        setUserDoc({ email: email, name: name }); // Atualiza o estado do usuário com o e-mail e o nome
      }
    });

    return () => unsubscribe(); // Cancela a inscrição do snapshot ao desmontar o componente
  }, [ id, email ]); // Atualiza o efeito colateral quando o ID do chat ou o e-mail do usuário mudam

  const handleNewChat = () => {
    if (item && userDoc) {
      const name = userDoc.name || item.split("@")[ 0 ]; // Obtém o nome do usuário ou usa o valor padrão
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
      {userDoc && userDoc.photoURL ? ( // Verifica se há foto do usuário
        <S.Avatar src={userDoc.photoURL} />
      ) : (
        <MdPerson /> // Ícone de usuário padrão caso não haja foto
      )}
      <S.Nome>{userDoc?.name || item.split("@")[ 0 ]}</S.Nome> 
    </S.Container>
  );
};

export default ChatsItem;
