import { InstagramPost } from "@/types/instagram";
import axios from "./axios";
import { ingestAxiomData } from "./axiom";
import { AxiosError } from "axios";

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
    await ingestAxiomData(response);
    return [];
  } catch (error) {
    if (error instanceof AxiosError) {
      await ingestAxiomData(error);
    }
    return [];
  }
}

export { fetchInstagramPosts };
