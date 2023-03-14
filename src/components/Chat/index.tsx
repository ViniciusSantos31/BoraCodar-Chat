import { useState } from "react";
import { IconClose } from "../../assets/icons";
import Badge from "../Badge";
import Input from "../Input";
import Message from "../Message";
import {
  ChatBody,
  ChatContainer,
  ChatFooter,
  CloseButton,
  DayDivider,
  Header,
  UserActions,
} from "./styles";

const messageMock: Message = {
  content: "Olá, tudo bem?",
  user: {
    id: 1,
    name: "Vinicius",
  },
  time: new Date(),
};

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([messageMock]);

  const handleSendMessage = (message?: string) => {
    if (!message) return;
    const date = new Date();
    const { hour, minutes } = {
      hour: date.getHours(),
      minutes: date.getMinutes(),
    };

    const newMessage = {
      content: message,
      user: {
        id: 1,
        name: "Vinicius",
      },
      time: new Date(),
    };

    setMessages((prevState) => [...prevState, newMessage]);
  };

  return (
    <ChatContainer className="container-chat">
      <Header className="header-chat">
        <Badge />
        <UserActions className="user-actions">
          <CloseButton className="btn btn-action">
            <img src={IconClose} alt="Close" />
          </CloseButton>
        </UserActions>
      </Header>
      <ChatBody className="body-chat">
        <DayDivider>
          <p>Hoje</p>
        </DayDivider>
        {messages.map((message, idx) => (
          <>
            <Message key={`${message.user?.id}-${idx}`} message={message} />
          </>
        ))}
      </ChatBody>
      <ChatFooter className="footer-chat">
        <Input
          onSend={handleSendMessage}
          placeholder="Digite sua mensagem..."
        />
      </ChatFooter>
    </ChatContainer>
  );
};

export default Chat;
