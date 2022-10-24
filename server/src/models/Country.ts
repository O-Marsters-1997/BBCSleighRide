import mongoose, { Document, Schema } from "mongoose";

export interface ICountryModel extends Country, Document {}

const CountrySchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    continent: { type: String, required: true },
    song: { type: String, required: false },
    greeting: { type: String, required: true },
    celebrated: { type: String, required: true },
    meal: { type: String, required: false },
    decorations: { type: String, required: true },
    didYouKnow: { type: String, required: false },
  },
  {
    versionKey: false,
  },
);

export default mongoose.model<ICountryModel>("Country", CountrySchema);
