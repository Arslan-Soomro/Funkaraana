import { apiUrl } from "./globals";

export const postTo = async (
  url: string,
  data: unknown,
  includeStatus = true
) => {
  try {
    const res = await fetch(apiUrl + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resStatus = res.status;

    const payload = await res.json();

    if (includeStatus) {
      payload.status = resStatus;
    }

    return payload;
  } catch (err) {
    console.log("Error@PostTo: " + err);
    return undefined;
  }
};
