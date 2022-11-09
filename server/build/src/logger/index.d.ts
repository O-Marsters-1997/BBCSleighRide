declare const logger: import("pino").Logger<{
    transport: {
        target: string;
        options: {
            colorize: boolean;
        };
    };
    base: {
        pid: boolean;
    };
    timestamp: () => string;
}>;
export default logger;
