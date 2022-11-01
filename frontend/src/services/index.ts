const baseUrl: string = "http://localhost:9090/";

export const getQuestions = async () => {
  const response = await fetch(`${baseUrl}questions`);
  const data = await response.json();
  return data;
  //  return fetch(`${baseUrl}questions`);
};
