import { fetchPostsList } from "@/lib/api";
import { Posts } from "../components/posts/posts";

export default async function PostsPage() {
  const postsList = await fetchPostsList();
  return <Posts postsList={postsList} />;
}
