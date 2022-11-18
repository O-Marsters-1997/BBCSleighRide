import mongoose, { Document } from "mongoose";
export interface ICountryModel extends Country, Document {
}
declare const _default: mongoose.Model<ICountryModel, {}, {}, {}, any>;
export default _default;
