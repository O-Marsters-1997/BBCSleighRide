"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = __importDefault(require("dayjs"));
const pino_1 = __importDefault(require("pino"));
const logger = (0, pino_1.default)({
    transport: {
        target: "pino-pretty",
        options: { colorize: true },
    },
    base: {
        pid: false,
    },
    timestamp: () => `,"time":"${(0, dayjs_1.default)().format()}"`,
});
exports.default = logger;
