import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Trending = () => {
  const url = `https://dev.to/api/articles`;
  const [num, setNum] = useState(4);
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  const slicedBlogs = data.slice(0, num);
  console.log(slicedBlogs);

  return (
    <div className="grid grid-cols-4 gap-5">
      {slicedBlogs.map((blog) => {
        return (
          <Link key={blog.id} href={`/blog/${blog.id}`}>
            <TrendCard
              image={blog.cover_image}
              title={blog.title}
              tags={blog.tag_list}
            />
          </Link>
        );
      })}
    </div>
  );
};

const TrendCard = (props) => {
  const { image, title, tags } = props;
  const tag = tags[0];
  return (
    <div
      className="w-[290px] h-[320px] rounded-xl "
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-full bg-[rgba(0,0,0,0.2)] flex flex-col  justify-end rounded-xl font-bold text-base ">
        <div>
          {" "}
          <button className="bg-blue-500 rounded-xl p-1 mb-5 ml-5">
            {tag}
          </button>
        </div>
        <h1 className="mb-10 ml-5 text-white">{title}</h1>
      </div>
    </div>
  );
};

export default Trending;
