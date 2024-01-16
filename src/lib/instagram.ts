import { InstagramPost } from "@/types/instagram";
import axios from "./axios";
import { digestAxiomData } from "./axiom";
import { AxiosError } from "axios";
import { LoggingEvent } from "@/types/logging";
import { LOGGING_CODE } from "@/utils/contansts";

/**
 * Fetch Instagram posts from API
 * @returns {Promise<Array<DiscordMessage>>}
 */
async function fetchInstagramPosts(): Promise<Array<InstagramPost>> {
  try {
    const response = await axios.get("/api/community/instagram");
    if (response.status === 200) {
      const posts: Array<InstagramPost> = response.data.payload.data;
      return posts;
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

export { fetchInstagramPosts };
