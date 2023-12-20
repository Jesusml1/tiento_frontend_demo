import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactComponent as DiscordLogo } from "@/assets/discord.svg";
import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import MessagesSection from "./MessagesSection";

const apiUrl = import.meta.env.VITE_API_URL;

const DiscordMessageCard = styled.div`
  background: rgba(54, 169, 192, 0.2);
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const DiscordMessageUser = styled.div`
  font-size: 20px;
`;

const DiscordMessageDateTime = styled.div`
  font-size: 12px;
  color: rgba(224, 224, 224);
`;

const DiscordMessageContetn = styled.div`
  font-size: 14px;
`;

const borderSharedStyles = css`
  position: absolute;
  width: 50px;
  height: 50px;
`;

const cornerBorderProps = "1px solid white";

const TopLeftCorner = styled.div`
  ${borderSharedStyles}
  top: 0;
  left: 0;
  border-top: ${cornerBorderProps};
  border-left: ${cornerBorderProps};
`;
const TopRightCorner = styled.div`
  ${borderSharedStyles}
  top: 0;
  right: 0;
  border-top: ${cornerBorderProps};
  border-right: ${cornerBorderProps};
`;
const BottomLeftCorner = styled.div`
  ${borderSharedStyles}
  bottom: 0;
  left: 0;
  border-left: ${cornerBorderProps};
  border-bottom: ${cornerBorderProps};
`;
const BottomRightCorner = styled.div`
  ${borderSharedStyles}
  bottom: 0;
  right: 0;
  border-right: ${cornerBorderProps};
  border-bottom: ${cornerBorderProps};
`;

interface DiscordMessage {
  author: string;
  content: string;
  date: string;
}

interface DiscordUser {
  id: string;
  username: string;
}

async function fetchMessages(discordUser: DiscordUser) {
  try {
    const response = await axios.post("/api/community/discord", {
      username: discordUser.username,
    });
    if (response.status === 200) {
      return response.data.data;
    }
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

function DiscordMessages() {
  const [loading, setLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<Array<DiscordMessage>>([]);
  const [noUser, setNoUser] = useState<boolean>(false);

  useEffect(() => {
    const discordUserStr = localStorage.getItem("discord_user_info");
    if (discordUserStr !== null) {
      const discordUser: DiscordUser = JSON.parse(discordUserStr);
      if (discordUser !== null) {
        setLoading(true);
        fetchMessages(discordUser)
          .then(setMessages)
          .finally(() => {
            setLoading(false);
          });
      }
    } else {
      setNoUser(true);
    }
  }, []);

  return (
    <MessagesSection>
      {/* <TopLeftCorner />
      <TopRightCorner />
      <BottomLeftCorner />
      <BottomRightCorner /> */}
      <a href="#">
        <DiscordLogo width={80} height={80} />
      </a>
      {loading && <div>Loading...</div>}
      {noUser && (
        <a href={`${apiUrl}/api/auth/discord`} style={{color: 'white'}}>Connect with discord</a>
      )}
      {messages.map((message, i) => (
        <DiscordMessageCard key={i}>
          <DiscordMessageUser>{message.author}</DiscordMessageUser>
          <DiscordMessageDateTime>{message.date}</DiscordMessageDateTime>
          <DiscordMessageContetn>{message.content}</DiscordMessageContetn>
        </DiscordMessageCard>
      ))}
    </MessagesSection>
  );
}

export default DiscordMessages;
