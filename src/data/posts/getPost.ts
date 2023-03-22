import { PostData } from "@/domain/posts/post";
import { fetchJson } from "@/utils/fetchJson";

export const getPost = async (slug: string | string[]): Promise<PostData> => {
  const slugParam = Array.isArray(slug) ? slug[0] : slug;
  const url = `${process.env.API_URL}${process.env.POSTS_URL}?populate=*&filters[slug][$eq]=${slugParam}`;
  const rawData = await fetchJson(url);
  const { data } = JSON.parse(rawData);
  return data[0];
};
