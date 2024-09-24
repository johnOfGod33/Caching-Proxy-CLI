import { Request } from "express";

const getRequestConfig = (req: Request, origin: string) => {
  const requestUrl = `${origin}${req.url}`;

  const requestConfig = {
    method: "get",
    url: requestUrl,
    headers: req.headers,
  };

  return requestConfig;
};

export default getRequestConfig;
