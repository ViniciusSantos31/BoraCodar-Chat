import { useEffect, useState } from "react";
import { PerfilImage } from "../../assets/images";
import { Avatar, BadgeContainer, Info, Name, Status } from "./styles";

const Badge: React.FC = () => {
  const [isOnline, setIsOnline] = useState(true);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIsOnline((prevState) => !prevState);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // });

  return (
    <BadgeContainer className="user-badge">
      <Avatar src={PerfilImage} alt="User Avatar" className="user-avatar" />
      <Info className="user-info">
        <Name className="user-name">Vinicius</Name>
        {isOnline && <Status className="user-status">online</Status>}
      </Info>
    </BadgeContainer>
  );
};

export default Badge;
