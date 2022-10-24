import mongoose, { Document, Schema } from "mongoose";

export interface IJokeModel extends Joke, Document {}

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
