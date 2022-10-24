import mongoose, { Document, Schema } from "mongoose";

export interface IJoke {
  joke: string;
  punchline: string;
}

export interface IJokeModel extends IJoke, Document {}

const JokeSchema: Schema = new Schema(
  {
    joke: { type: String, required: true },
    punchline: { type: String, required: true },
  },
  {
    versionKey: false,
  },
);

export default mongoose.model<IJokeModel>("Joke", JokeSchema);
