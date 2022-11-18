import { AxiosError, AxiosRequestConfig, Method } from "axios";
import { ActionType, SantaActionType } from "../state/actionTypes";

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

  interface ActionTypeObject {
    res: ActionTypeOptions;
    err: ActionTypeOptions;
  }

  type ActionTypeOptions =
    | "set questions"
    | "questions error"
    | "reset quiz"
    | "start quiz"
    | "end quiz"
    | "answer correctly"
    | "answer incorrectly"
    | "next question"
    | "next question give up"
    | "set joke"
    | "refetch joke"
    | "joke error"
    | "reset joke"
    | "show modal"
    | "hide modal"
    | "set countries"
    | "countries error"
    | "toggle instructions"
    | "select greeting"
    | "set map position"
    | null;

  type Context = {
    // Quiz
    setQuestions: (
      questions: Quiz[],
    ) => (dispatch: Dispatch<Quiz.Action>) => void;
    questionsError: (
      error: AxiosError,
    ) => (dispatch: Dispatch<Quiz.Action>) => void;
    resetQuiz: () => void;
    startQuiz: () => void;
    endQuiz: () => void;
    answerCorrectly: () => void;
    answerIncorrectly: () => void;
    nextQuestion: () => void;
    nextQuestionGiveUp: () => void;
    // Joke
    setJoke: (jokes: Joke) => (dispatch: Dispatch<Joke.Action>) => void;
    jokeError: (error: AxiosError) => (dispatch: Dispatch<Joke.Action>) => void;
    resetJoke: () => void;
    showModal: () => void;
    hideModal: () => void;
    // Map
    setCountries: (
      countries: Country[],
    ) => (dispatch: Dispatch<Countries.Action>) => void;
    countriesError: (
      error: AxiosError,
    ) => (dispatch: Dispatch<Countries.Action>) => void;
    toggleInstructions: () => void;
    selectGreeting: (
      greeting: string,
    ) => (dispatch: Dispatch<Countries.Action>) => void;
    setMapPosition: (
      position: MapAxis,
    ) => (dispatch: Dispatch<Countries.Action>) => void;
  };

  // Api types
  type FetchConfig = {
    axiosInstance: any;
    method: Method;
    url: string;
    requestConfig: AxiosRequestConfig;
  };

  type Endpoint = "joke" | "quiz" | "countries";

  type Endpoints = { [point in Endpoints]: string };

  declare namespace Countries {
    interface MapState {
      response: Country[] | undefined;
      loading: boolean;
      error: AxiosError | null;
      selectedMapFilter: string | undefined;
      modalOpen: boolean;
      position: MapAxis;
    }

    interface MapAxis {
      coordinates: [number, number];
      name?: string;
      zoom?: any;
    }

    interface ToolTipContent {
      option: string;
      optionValue: string;
      name: string;
    }

    interface SetCountries {
      type: ActionType.SET_COUNTRIES;
      payload: Country[];
    }

    interface CountriesError {
      type: ActionType.COUNTRIES_ERROR;
      payload: any;
    }

    interface ToggleInstructions {
      type: ActionType.TOGGLE_INSTRUCTIONS;
    }

    interface SelectGreeting {
      type: ActionType.SELECT_GREETING;
      payload: any;
    }

    interface SetMapPosition {
      type: ActionType.SET_MAP_POSITION;
      payload: MapAxis;
    }

    type Action =
      | SetCountries
      | CountriesError
      | ToggleInstructions
      | SelectGreeting
      | SetMapPosition;
  }

  declare namespace Joke {
    interface JokeState {
      response: Joke | undefined;
      loading: boolean;
      error: AxiosError | null;
      newRequest: number;
      modalOpen: boolean;
      selectedJoke: Joke | null;
      toggleJokeView: boolean;
    }

    interface SetJoke {
      type: ActionType.SET_JOKE;
      payload: Joke;
    }

    interface JokeError {
      type: ActionType.JOKE_ERROR;
      payload: any;
    }

    interface ResetJoke {
      type: ActionType.RESET_JOKE;
    }

    interface ShowModal {
      type: ActionType.SHOW_MODAL;
    }

    interface HideModal {
      type: ActionType.HIDE_MODAL;
    }

    type Action =
      | SetJoke
      | JokeError
      | RefetchJoke
      | ResetJoke
      | ShowModal
      | HideModal;
    // | SelectJoke;
  }

  declare namespace Quiz {
    interface QuizGame {
      response: Quiz[];
      loading: boolean;
      error: AxiosError | null;
      currentAnswer: CurrentAnswer;
      answeredCorrectly: boolean;
      readyToPlay: boolean;
      correctQuestions: number;
      totalQuestions: number;
      questionsRemaining: number;
      livesLeft: number;
    }

    interface Load {
      type: ActionType.LOAD_QUESTIONS;
    }

    interface SetQuestions {
      type: ActionType.SET_QUESTIONS;
      payload: Quiz[];
    }

    interface Error {
      type: ActionType.QUESTIONS_ERROR;
      payload: any;
    }

    interface Reset {
      type: ActionType.RESET_QUIZ;
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

    interface NextQuestion {
      type: ActionType.NEXT_QUESTION;
    }

    interface NextQuestionGiveUp {
      type: ActionType.NEXT_QUESTION_GIVE_UP;
    }

    type Action =
      | SetQuestions
      | Error
      | Reset
      | Start
      | End
      | AnswerCorrectly
      | AnswerIncorrectly
      | NextQuestion
      | NextQuestionGiveUp;

    type CurrentAnswer = string | undefined;
  }

  declare namespace Santa {
    interface SantaState {
      isOpen: boolean;
      messages: string[];
    }

    type Keys = keyof typeof SantaActionType;

    interface SantaAction {
      type: typeof SantaActionType[Keys];
      payload: string;
    }
  }

  declare namespace Utils {
    // Typography
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

    interface FontVariant {
      fontFamily: string;
      fontSize: number;
      fontWeight: number;
    }

    type TextVariant =
      | "h1"
      | "h2"
      | "h3"
      | "h4"
      | "h5"
      | "h6"
      | "subtitle1"
      | "subtitle2"
      | "body1"
      | "body2"
      | "caption"
      | "button"
      | "overline"
      | "inherit"
      | undefined;

    type TextVariantMap = { [variant in TextVariant]: string };

    type FontType = "heading" | "body";

    // Palette
    type ColorVariant =
      | "primary"
      | "primaryAlt"
      | "secondary"
      | "secondaryAlt"
      | "grey"
      | "greyAlt";

    type ColorVariantMap = { [color in ColorVariant]: string };

    interface Palette {
      main: string;
      contrastText: string;
      additional?: string;
      muted?: string;
    }

    type FontColor = string;

    // Loading

    type LoadingSize = "small" | "medium" | "large";

    type LoadingSizeMap = { [size in LoadingSize]: string };

    type PageSide = "left" | "right";

    // Breakpoints

    type Breakpoints =
      | "xSmall"
      | "small"
      | "smallMedium"
      | "medium"
      | "mediumPlus"
      | "mediumLarge"
      | "large"
      | "xLarge"
      | undefined;

    type BreakpointsMap = { [breakpoint in Breakpoints]: Breakpoints };

    type Devices = {
      mobileS: number;
      mobileL: number;
      tabletS: number;
      tablet: number;
      laptop: number;
      laptopM: number;
      laptopL: number;
      desktop: number;
    };

    type Modifiers = {
      x1: number;
      x2: number;
      x3: number;
      x4: number;
      x5: number;
      x6: number;
      x7: number;
      x8: number;
      x9: number;
      x10: number;
      x11: number;
    };

    type ButtonVariant = "normal" | "rounded";
  }

  declare namespace CSS {
    type JustifyContent =
      | "flex-start"
      | "flex-end"
      | "space-between"
      | "space-around"
      | "center"
      | "initial"
      | "inherit";

    type AlignItems =
      | "flex-start"
      | "flex-end"
      | "space-between"
      | "space-around"
      | "center"
      | "initial"
      | "inherit";

    type TextAlign = "start" | "center" | "left" | "right" | "justify";
  }
}
