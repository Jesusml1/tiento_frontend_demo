const apiUrl = import.meta.env.VITE_API_URL;
const axiomToken = import.meta.env.VITE_AXIOM_TOKEN || "";
const axiomOrgId = import.meta.env.VITE_AXIOM_ORG_ID || "";
const axiomDataset = import.meta.env.VITE_AXIOM_DATASET || "";

const envVars = {
  apiUrl,
  axiomToken,
  axiomOrgId,
  axiomDataset,
};

export default envVars;
