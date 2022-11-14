/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxyMiddleware from "next-http-proxy-middleware";

export default (req: NextApiRequest, res: NextApiResponse) => httpProxyMiddleware(req, res, {
    target: 'https://larrys-api.herokuapp.com/message',
    pathRewrite: {
        '^/api/larry': 'https://google.com',
    },
});