import api from "./axios";

export const getCSRFToken = async () => {
  const res = await api.get("/auth/csrf-token");
  return res.data.csrfToken;
};