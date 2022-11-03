import { ActionType } from "../state/actionTypes";

declare global {
  interface Country {
    name: string;
    continent: string;
    song?: string;
    greeting: string;
    celebrated: string;
    meal?: string;
    decorations: string;
    didYouKnow?: string;
  }

  interface Joke {
    joke: string;
    punchline: string;
  }

  interface Quiz {
    question: string;
    correct: string;
    options?: string[];
  }

  declare namespace Quiz {
    interface QuizGame {
      questions: Quiz[];
      readyToPlay: boolean;
      correctQuestions: number;
      incorrectQuestions: number;
      totalQuestions: number;
      questionsRemaining: number;
      livesLeft: number;
    }

    interface Load {
      type: ActionType.LOAD_QUESTIONS;
    }

    interface Get {
      type: ActionType.GET_QUESTIONS;
      payload: {
        quiz: Quiz[];
      };
    }

    interface Start {
      type: ActionType.START_QUIZ;
    }

    interface End {
      type: ActionType.END_QUIZ;
    }

    interface AnswerCorrectly {
      type: ActionType.ANSWER_CORRECTLY;
    }

    interface AnswerIncorrectly {
      type: ActionType.ANSWER_INCORRECTLY;
    }

    type Action = Start | End | AnswerCorrectly | AnswerIncorrectly;

    type Context = {
      startQuiz: () => void;
      endQuiz: () => void;
      answerCorrectly: () => void;
      answerIncorrectly: () => void;
    };
  }

  declare namespace Utils {
    interface FontWeight {
      light: number;
      regular: number;
      bold: number;
      extraBold: number;
    }

    interface FontFamilies {
      body: string;
      headings: string;
    }

    type TextVariant =
      | "h1"
      | "h2"
      | "h3"
      | "h4"
      | "h5"
      | "h6"
      | "body"
      | "bodyBold"
      | "button";

    type FontType = "heading" | "body";

    interface Palette {
      main: string;
      contrastText: string;
    }

    type FontColor = string;

    type LoadingSize = "small" | "medium" | "large";
  }
}
