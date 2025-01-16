"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloContract = void 0;
var core_1 = require("@ts-rest/core");
var zod_1 = require("zod");
var c = (0, core_1.initContract)();
exports.helloContract = c.router({
    getHello: {
        method: "GET",
        path: "/",
        responses: {
            200: zod_1.z.object({
                message: zod_1.z.string()
            }),
            422: zod_1.z.object({
                error: zod_1.z.string().optional()
            })
        }
    },
    postHello: {
        method: "POST",
        path: "/",
        body: zod_1.z.object({
            name: zod_1.z.string()
        }),
        responses: {
            200: zod_1.z.object({
                message: zod_1.z.string()
            }),
            422: zod_1.z.object({
                error: zod_1.z.string().optional()
            })
        }
    }
}, {
    pathPrefix: "/hello"
});
