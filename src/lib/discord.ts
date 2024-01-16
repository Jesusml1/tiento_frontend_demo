import { DiscordMessage, DiscordUser } from "@/types/discord";
import axios from "./axios";
import { ingestAxiomData } from "./axiom";
import { AxiosError } from "axios";
import { API_ENDPOINTS } from "@/utils/contansts";

/**
 * Fetch Discord messages from API
 * @param {DiscordUser} discordUser
 * @returns {Promise<Array<DiscordMessage>>}
 */
async function fetchDiscordMessages(
  discordUser: DiscordUser
): Promise<Array<DiscordMessage>> {
  try {
    const response = await axios.post(API_ENDPOINTS.COMMUNITY_DISCORD, {
      username: discordUser.username,
    });
    if (response.status === 200) {
      return response.data.data;
    }

    await ingestAxiomData(response);
    return [];
  } catch (error) {
    if (error instanceof AxiosError) {
      await ingestAxiomData(error);
    }
    return [];
  }
}

export { fetchDiscordMessages };
