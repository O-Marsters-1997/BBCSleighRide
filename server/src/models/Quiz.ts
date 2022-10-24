import mongoose, { Document, Schema } from "mongoose";

export interface IQuiz {
  question: string;
  correct: string;
  options?: string[];
}

export interface IQuizModel extends IQuiz, Document {}

const QuizSchema: Schema = new Schema(
  {
    question: { type: String, required: true },
    correct: { type: String, required: true },
    options: { type: Array<String>, required: false },
  },
  {
    versionKey: false,
  },
);

export default mongoose.model<IQuizModel>("Quiz", QuizSchema);
