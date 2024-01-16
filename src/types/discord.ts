export interface DiscordUser {
  id: string;
  username: string;
}

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
