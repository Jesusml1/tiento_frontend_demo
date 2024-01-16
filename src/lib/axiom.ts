import { LoggingEvent } from "@/types/logging";
import { Axiom } from "@axiomhq/js";

const axiomToken = import.meta.env.VITE_AXIOM_TOKEN || "";
const axiomOrgId = import.meta.env.VITE_AXIOM_ORG_ID || "";
const axiomDataset = import.meta.env.VITE_AXIOM_DATASET || "";

const axiom = new Axiom({
  token: axiomToken,
  orgId: axiomOrgId,
});

export async function digestAxiomData(loggingEvent: LoggingEvent) {
  try {
    axiom.ingest(axiomDataset, [loggingEvent]);
    await axiom.flush();
  } catch (error) {
    console.log(error);
  }
}

export { axiomDataset };
export default axiom;
