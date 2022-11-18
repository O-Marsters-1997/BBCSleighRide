import mongoose, { Document } from "mongoose";
export interface IJokeModel extends Joke, Document {
}
declare const _default: mongoose.Model<IJokeModel, {}, {}, {}, any>;
export default _default;
