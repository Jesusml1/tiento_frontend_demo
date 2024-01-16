import { AxiosError, AxiosResponse } from "axios";
import axios from "./axios";
import { ingestAxiomData } from "./axiom";
import { API_ENDPOINTS } from "@/utils/contansts";

/**
 * Send verification code to user email
 * @param {string} email
 * @param {string | undefined} userId
 * @param {string | null} token
 * @returns {Promise<AxiosResponse | undefined>}
 */
async function sendVerificationCode(
  email: string,
  userId: string | undefined,
  token: string | null
): Promise<AxiosResponse | undefined> {
  try {
    const response = await axios.post(
      API_ENDPOINTS.AUTH_SEND_VERIFICATION_CODE,
      { email: email, discord_id: userId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (response.status !== 200) {
      await ingestAxiomData(response);
    }
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      await ingestAxiomData(error);
      console.log(error);
    }
  }
}

/**
 * Verify confirmation code send to user
 * @param {string} verificationCode
 * @param {string | null} token
 * @returns {Promise<AxiosResponse | undefined>}
 */
async function checkVerificationCode(
  verificationCode: string,
  token: string | null
): Promise<AxiosResponse | undefined> {
  try {
    const response = axios.put(
      API_ENDPOINTS.AUTH_CHECK_VERIFICATION_CODE,
      { code: verificationCode },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      await ingestAxiomData(error);
      console.log(error);
    }
  }
}

export { sendVerificationCode, checkVerificationCode };
