const baseUrl: string = "http://localhost:9090/";

export const getQuestions = async () =>
  fetch(`${baseUrl}questions`).then((res) => res.json);
