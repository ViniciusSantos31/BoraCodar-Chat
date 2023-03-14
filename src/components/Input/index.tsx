import { FormEvent, FormEventHandler, useState } from "react";
import { IconSend } from "../../assets/icons";
import { InputContainer } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSend: (message?: string) => void;
}

const Input: React.FC<InputProps> = ({ onSend, ...rest }) => {
  const [message, setMessage] = useState<string | undefined>(undefined);

  const handleChangeMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setMessage(value);
  };

  const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSend(message?.toString());
    setMessage("");
  };

  return (
    <form style={{ width: "100%" }} onSubmit={(e) => handleSendMessage(e)}>
      <InputContainer className="input" htmlFor="input-chat">
        <input
          id="input-chat"
          type="text"
          autoComplete="off"
          value={message}
          onChange={handleChangeMessage}
          {...rest}
        />
        <button type="submit" disabled={message?.toString() === ""}>
          <img src={IconSend} />
        </button>
      </InputContainer>
    </form>
  );
};

export default Input;
