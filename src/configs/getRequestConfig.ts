import { Request } from "express";

const getRequestConfig = (req: Request, origin: string) => {
  let requestUrl = `${origin}${req.url}`;

  let requestConfig = {
    method: "get",
    url: requestUrl,
    headers: req.headers,
  };

  return requestConfig;
};

export default getRequestConfig;
