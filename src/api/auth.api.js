import api from "./axios";
import { getCSRFToken } from "./csrf";

export const logoutUser = async () => {
  const csrf = await getCSRFToken();

  await api.post(
    "/auth/logout",
    {},
    {
      headers: {
        "X-CSRF-Token": csrf,
      },
    }
  );
};