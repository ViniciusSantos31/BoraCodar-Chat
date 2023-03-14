import { Container, MessageBallon, MessageHeader } from "./styles";

type Message = {
  content: string;
  user: {
    id: number;
    name: string;
  };
  time: Date;
};

type MessageProps = {
  message: Message;
};

const Message: React.FC<MessageProps> = ({ message }) => {
  const { content, user, time } = message;
  const isUser = user.id === 1;

  const formatTime = (date: Date) => {
    const { hour, minutes } = {
      hour: date.getHours(),
      minutes: date.getMinutes(),
    };

    return `${hour}:${minutes}`;
  };

  return (
    <Container isUser={isUser} className="message">
      <MessageHeader className="message-header">
        <p className="message-user">{isUser ? "Você" : user.name}</p>
        <p className="message-time">{formatTime(time)}</p>
      </MessageHeader>
      <MessageBallon>{content}</MessageBallon>
    </Container>
  );
};

export default Message;
