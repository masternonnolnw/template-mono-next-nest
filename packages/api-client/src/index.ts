import { initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();

export const helloContract = c.router(
  {
    getHello: {
      method: "GET",
      path: "/",
      responses: {
        200: z.object({
          message: z.string()
        }),
        422: z.object({
          error: z.string().optional()
        })
      }
    },
    postHello: {
      method: "POST",
      path: "/",
      body: z.object({
        name: z.string()
      }),
      responses: {
        200: z.object({
          message: z.string()
        }),
        422: z.object({
          error: z.string().optional()
        })
      }
    }
  },
  {
    pathPrefix: "/hello"
  }
);
