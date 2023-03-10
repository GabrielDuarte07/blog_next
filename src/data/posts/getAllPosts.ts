import { PostData } from "@/domain/posts/post";
import { fetchJson } from "@/utils/fetchJson";

export const getAllPosts = async (): Promise<PostData[]> => {
  const data = await fetchJson<PostData[]>(
    `${process.env.API_URL}${process.env.POSTS_URL}`
  );
  return data;
};
