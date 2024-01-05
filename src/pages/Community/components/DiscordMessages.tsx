import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactComponent as DiscordLogo } from "@/assets/discord.svg";
import { useEffect, useState } from "react";
import axios from "@/utils/axios";
// import mockDiscordMessages from "@/data/mockDiscordMessages";
import TabName from "./TabName";
import { Flex } from "@mantine/core";
import Container from "./Container";
import ScrollView from "./ScrollView";

const apiUrl = import.meta.env.VITE_API_URL;

const DiscordMessagesContainer = styled.div``;

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

const DiscordMessageContent = styled.div`
  font-size: 14px;
  word-break: break-word;
`;

const DiscordMessageChannelName = styled.div`
  padding: 10px;
  border: 1px solid white;
  font-size: 10;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.1);
`;

export interface DiscordMessage {
  author: string;
  content: string;
  date: string;
  channel_name: string;
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
  const [messages, setMessages] =
    useState<Array<DiscordMessage>>([]);
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
    <Container>
      <TabName>
        <DiscordLogo width={35} height={35} />
      </TabName>
      <ScrollView>
        {loading && <div>Loading...</div>}
        {noUser && (
          <a href={`${apiUrl}/api/auth/discord`} style={{ color: "white" }}>
            Connect with discord
          </a>
        )}
        <DiscordMessagesContainer>
          {messages.map((message, i) => (
            <DiscordMessageCard key={i}>
              <Flex justify="space-between" align="center">
                <DiscordMessageUser>{message.author}</DiscordMessageUser>
                <DiscordMessageChannelName>
                  {message.channel_name}
                </DiscordMessageChannelName>
              </Flex>
              <DiscordMessageDateTime>{message.date}</DiscordMessageDateTime>
              <DiscordMessageContent>{message.content}</DiscordMessageContent>
            </DiscordMessageCard>
          ))}
        </DiscordMessagesContainer>
      </ScrollView>
    </Container>
  );
}

export default DiscordMessages;
