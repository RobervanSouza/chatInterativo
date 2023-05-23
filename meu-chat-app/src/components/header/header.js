import React from 'react'
import * as S from "./styled";
import { MdDonutLarge, MdChat, MdMoreVert } from "react-icons/md";
import * as EmailValidator from "email-validator";
import { auth, db } from "../../Services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

const Header = ({setUserchat }) => {
  const [ user ] = useAuthState(auth);
  const chat = db
  .collection("chats")
  .where("users", "array-contains", user.email)
  const [chatExiste] = useCollection(chat)

  const handleCreateChat = () => {
     const inputEmail = prompt("escreva seu Email");

     if (!inputEmail) return;
     if (!EmailValidator.validate(inputEmail)){

       return alert("email inválido!");
     } else if (inputEmail === user.email) {
       return alert("Insira um e-mail diferente do seu!");
     } else if (chatJaExiste(inputEmail)) {
       return alert("Chat já existe!");
     }
    db.collection("chats").add({
      users: [ user.email, inputEmail ],
    });
  }

  const chatJaExiste = (chatemail) =>{
    return !!chatExiste?.docs.find(
      (chat => chat.data().users.find((user) => user === chatemail)?.length > 0 )
    )
  }


  return (
    <div>
      <S.Container>
        <S.Avatar src={user?.photoURL} 
        onClick={() => [auth.signOut(), setUserchat(null)]}/>
        <S.Options>
          <MdDonutLarge/>
          <MdChat onClick={handleCreateChat} />
          <MdMoreVert/>
        </S.Options>
      </S.Container>

    </div>
  )
}

export default Header;
