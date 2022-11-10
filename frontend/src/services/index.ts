const baseUrl: string = "http://localhost:9090/";

export const getData = async (params: Endpoint) => {
  const response = await fetch(`${baseUrl}${params}`);
  const data = await response.json();
  return data;
};
