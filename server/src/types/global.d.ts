declare interface Country {
  name: string;
  continent: string;
  song?: string;
  greeting: string;
  celebrated: string;
  meal?: string;
  decorations: string;
  didYouKnow?: string;
}

declare interface Joke {
  joke: string;
  punchline: string;
}

declare interface Quiz {
  question: string;
  correct: string;
  options?: string[];
}
