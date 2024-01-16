import { LoggingEvent } from "@/types/logging";
import { LOGGING_CODE } from "@/utils/contansts";
import { Axiom } from "@axiomhq/js";
import { type AxiosResponse, AxiosError } from "axios";
import { isAxiosResponse } from "./axios";

const axiomToken = import.meta.env.VITE_AXIOM_TOKEN || "";
const axiomOrgId = import.meta.env.VITE_AXIOM_ORG_ID || "";
const axiomDataset = import.meta.env.VITE_AXIOM_DATASET || "";

const axiom = new Axiom({
  token: axiomToken,
  orgId: axiomOrgId,
});

function createLoggingEvent(
  axiosResponse: AxiosResponse | AxiosError
): LoggingEvent | undefined {
  if (isAxiosResponse(axiosResponse)) {
    const loggingEvent = {
      code: LOGGING_CODE.FAILED_TO_FETCH,
      details: {
        statusCode: axiosResponse.status,
        error: axiosResponse.data,
        endpoint: axiosResponse.config.url,
      },
    } as LoggingEvent;
    return loggingEvent;
  }
  if (axiosResponse instanceof AxiosError) {
    const loggingEvent = {
      code: LOGGING_CODE.FAILED_TO_FETCH,
      details: {
        statusCode: axiosResponse.response?.status,
        error: axiosResponse.response?.data,
        endpoint: axiosResponse.config?.url,
      },
    } as LoggingEvent;
    return loggingEvent;
  }

  return undefined;
}

export async function ingestAxiomData(
  axiosResponse: AxiosResponse | AxiosError
) {
  try {
    const loggingEvent = createLoggingEvent(axiosResponse);
    axiom.ingest(axiomDataset, [loggingEvent]);
    await axiom.flush();
  } catch (error) {
    console.log(error);
  }
}

export { axiomDataset };
export default axiom;
