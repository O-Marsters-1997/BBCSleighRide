import mongoose, { Document } from "mongoose";
export interface IQuizModel extends Quiz, Document {
}
declare const _default: mongoose.Model<IQuizModel, {}, {}, {}, any>;
export default _default;
