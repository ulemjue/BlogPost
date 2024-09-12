import { useRouter } from "next/router";
import useSWR from "swr";
import Markdown from "react-markdown";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const BlogPage = () => {
  const router = useRouter();

  const { blogId } = router.query;

  const url = `https://dev.to/api/articles/${blogId}`;

  const { data: blog, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  const { body_markdown } = blog;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl">{blog.title}</h1>
      <img src={blog.cover_image} height={600} width={656} />
      <div className="prose">
        <Markdown>{body_markdown}</Markdown>
      </div>
    </div>
  );
};
export default BlogPage;
