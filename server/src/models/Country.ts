import mongoose, { Document, Schema } from "mongoose";

export interface ICountry {
  name: string;
  continent: string;
  song?: string;
  greeting: string;
  celebrated: string;
  meal: string;
  decorations: string;
  didYouKnow: string;
}

export interface ICountryModel extends ICountry, Document {}

const CountrySchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    continent: { type: String, required: true },
    song: { type: String, required: false },
    greeting: { type: String, required: true },
    celebrated: { type: String, required: true },
    meal: { type: String, required: true },
    decorations: { type: String, required: true },
    didYouKnow: { type: String, required: true },
  },
  {
    versionKey: false,
  },
);

export default mongoose.model<ICountryModel>("Country", CountrySchema);
