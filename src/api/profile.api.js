import api from "./axios";
import { getCSRFToken } from "./csrf";

export const getProfiles = async () => {
  const res = await api.get("/profiles");
  return res.data.data || [];
};

export const createProfile = async (data) => {
  const csrf = await getCSRFToken();

  await api.post("/profiles", data, {
    headers: {
      "X-CSRF-Token": csrf,
    },
  });
};

export const exportProfilesCSV = async () => {
  const res = await api.get("/profiles/export", {
    responseType: "blob",
  });

  return res.data;
};