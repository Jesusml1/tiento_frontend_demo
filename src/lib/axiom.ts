import { LoggingEvent } from "@/types/logging";
import { LOGGING_CODE } from "@/utils/contansts";
import { Axiom } from "@axiomhq/js";
import { type AxiosResponse, AxiosError } from "axios";
import { isAxiosResponse } from "./axios";
import envVars from "@/config/env";

const axiom = new Axiom({
  token: envVars.axiomToken,
  orgId: envVars.axiomOrgId,
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
    axiom.ingest(envVars.axiomDataset, [loggingEvent]);
    await axiom.flush();
  } catch (error) {
    console.log(error);
  }
}

export default axiom;
