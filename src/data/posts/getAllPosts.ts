import { PostData } from "@/domain/posts/post";
import { fetchJson } from "@/utils/fetchJson";

export const getAllPosts = async (query = ""): Promise<PostData[]> => {
  const url = `${process.env.API_URL}${process.env.POSTS_URL}?${query}`;
  const rawData = await fetchJson(url);
  const { data } = JSON.parse(rawData);
  return data;
};
