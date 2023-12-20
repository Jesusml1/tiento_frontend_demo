import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactComponent as DiscordLogo } from "@/assets/discord.svg";
import { useEffect, useState } from "react";
import axios from "@/utils/axios";

const discordMessages = [
  {
    id: "1",
    username: "nerdyraver",
    datetime: "11/15/2023, 1:32 PM",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "2",
    username: "Collab.Land",
    datetime: "11/15/2023, 1:32 PM",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "3",
    username: "Jesusml1",
    datetime: "11/15/2023, 1:32 PM",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const MessagesSection = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 20px;
  max-width: 30vw;
  overflow-y: scroll;
  border: 1px solid rgba(33, 150, 243, 0.15);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  flex-basis: 100%;

  @media (max-width: 1024px) {
    max-width: none;
    margin-left: 20px;
    margin-right: 20px;
    min-height: 350px;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

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

async function fetchMessages() {
  try {
    const response = await axios.post("/api/community/discord", {
      username: "jesusml1",
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

  useEffect(() => {
    setLoading(true);
    fetchMessages()
      .then(setMessages)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <MessagesSection>
      {/* <TopLeftCorner />
      <TopRightCorner />
      <BottomLeftCorner />
      <BottomRightCorner /> */}
      <div>
        <DiscordLogo width={80} height={80} />
      </div>
      {loading && <div>Loading...</div>}
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
