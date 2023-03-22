export const fetchJson = async (url: string): Promise<string> => {
  const rawData = await fetch(url);
  const jsonData = await rawData.text();
  return jsonData;
};
