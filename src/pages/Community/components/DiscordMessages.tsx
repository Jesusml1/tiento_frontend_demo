import styled from "@emotion/styled";
import { ReactComponent as DiscordLogo } from "@/assets/discord.svg";
import { useEffect, useState } from "react";
import TabName from "./TabName";
import { Flex } from "@mantine/core";
import Container from "./Container";
import ScrollView from "./ScrollView";
import { formatLongDiscordMessageContent } from "@/utils/formatting";
import { DiscordMessage, DiscordUser } from "@/types/discord";
import { API_ENDPOINTS, DISCORD_USER_INFO } from "@/utils/contansts";
import { fetchDiscordMessages } from "@/lib/discord";
import envVars from "@/config/env";

const discordApiRedirectUrl = envVars.apiUrl + API_ENDPOINTS.AUTH_DISCORD;

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
`;


function DiscordMessages() {
  const [loading, setLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<Array<DiscordMessage>>([]);
  const [noUser, setNoUser] = useState<boolean>(false);

  useEffect(() => {
    const discordUserStr = localStorage.getItem(DISCORD_USER_INFO);
    if (discordUserStr !== null) {
      const discordUser: DiscordUser = JSON.parse(discordUserStr);
      if (discordUser !== null) {
        setLoading(true);
        fetchDiscordMessages(discordUser)
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
          <a href={discordApiRedirectUrl} style={{ color: "white" }}>
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
                {formatLongDiscordMessageContent(message.content)}
              </DiscordMessageContent>
              <Flex direction="column" rowGap={15}>
                {message.attachment.map((att) => (
                  <DiscordAttachmentImage
                    key={att.id}
                    alt={att.filename}
                    height={att.height}
                    width={att.width}
                    src={att.url}
                  />
                ))}
              </Flex>
            </DiscordMessageCard>
          ))}
        </DiscordMessagesContainer>
      </ScrollView>
    </Container>
  );
}

export default DiscordMessages;
