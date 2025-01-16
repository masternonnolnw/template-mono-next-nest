import { z } from "zod";
export declare const helloContract: {
    getHello: {
        method: "GET";
        path: "/hello/";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
            }, {
                message: string;
            }>;
            422: z.ZodObject<{
                error: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                error?: string | undefined;
            }, {
                error?: string | undefined;
            }>;
        };
    };
    postHello: {
        method: "POST";
        body: z.ZodObject<{
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
        }, {
            name: string;
        }>;
        path: "/hello/";
        responses: {
            200: z.ZodObject<{
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
            }, {
                message: string;
            }>;
            422: z.ZodObject<{
                error: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                error?: string | undefined;
            }, {
                error?: string | undefined;
            }>;
        };
    };
};
