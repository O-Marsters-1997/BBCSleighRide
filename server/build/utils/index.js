"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedData = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = __importDefault(require("../logger"));
const seedData = (schema, items) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schema.deleteMany({});
        let done = 0;
        for (let i = 0; i < items.length; i++) {
            items[i].save().then((res) => {
                done++;
                if (done == items.length) {
                    exit();
                }
            });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.seedData = seedData;
function exit() {
    mongoose_1.default.disconnect();
    logger_1.default.info("disconnecting");
}
