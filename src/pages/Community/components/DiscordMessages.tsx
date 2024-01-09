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
  background: rgba(98, 92, 241, 0.5);
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

const DiscordMessageContent = styled.p`
  font-size: 1rem;
  word-break: break-word;
  width: inherit;
  word-wrap: normal;
  white-space: pre-wrap;
`;

const DiscordMessageChannelName = styled.div`
  padding: 10px;
  border: 1px solid white;
  font-size: 10;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.1);
`;

const DiscordAttachmentImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`

export interface DiscordAttachment {
  id: string;
  filename: string;
  size: number;
  url: string;
  proxy_url: string;
  width: number;
  height: number;
}

export interface DiscordMessage {
  author: string;
  content: string;
  date: string;
  channel_name: string;
  attachment: Array<DiscordAttachment>;
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

function formatMessageContent(message: string): string {
  if (message.length > 299) {
    return message.slice(0, 300) + "... keep reading on discord";
  }
  return message;
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
    <Container>
      <TabName bgColor="rgba(98, 92, 241, 0.3)">
        <DiscordLogo width={35} height={35} />
      </TabName>
      <ScrollView bgColor="rgba(98, 92, 241, 0.3)">
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
              <DiscordMessageContent>
                {formatMessageContent(message.content)}
              </DiscordMessageContent>
              <div>
                {message.attachment.map((att) => (
                  <DiscordAttachmentImage
                    key={att.id}
                    alt={att.filename}
                    height={att.height}
                    width={att.width}
                    src={att.url}
                  />
                ))}
              </div>
            </DiscordMessageCard>
          ))}
        </DiscordMessagesContainer>
      </ScrollView>
    </Container>
  );
}

export default DiscordMessages;
