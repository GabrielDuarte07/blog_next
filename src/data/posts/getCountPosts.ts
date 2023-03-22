import { fetchJson } from "@/utils/fetchJson";

export const getCountPosts = async (): Promise<string> => {
  const url = `${process.env.API_URL}${process.env.POSTS_URL}?fields[0]=id`;
  const dados = await fetchJson(url);
  const {
    meta: {
      pagination: { total },
    },
  } = JSON.parse(dados);
  return total;
};
