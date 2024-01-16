import { DiscordMessage, DiscordUser } from "@/types/discord";
import axios from "./axios";
import { digestAxiomData } from "./axiom";
import { AxiosError } from "axios";
import { LoggingEvent } from "@/types/logging";
import { LOGGING_CODE } from "@/utils/contansts";

/**
 * Fetch Discord messages from API
 * @param {DiscordUser} discordUser
 * @returns {Promise<Array<DiscordMessage>>}
 */
async function fetchMessages(
  discordUser: DiscordUser
): Promise<Array<DiscordMessage>> {
  try {
    const response = await axios.post("/api/community/discord", {
      username: discordUser.username,
    });
    if (response.status === 200) {
      return response.data.data;
    }

    return [];
  } catch (error) {
    if (error instanceof AxiosError) {
      await digestAxiomData({
        code: LOGGING_CODE.FAILED_TO_FETCH,
        details: {
          statusCode: error.response?.status,
          error: error.response?.data,
          endpoint: error.config?.url,
        },
      } as LoggingEvent);
    }
    return [];
  }
}

export { fetchMessages };
