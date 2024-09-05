import { useState } from "react";
import useSWR from "swr";
const url = "https://dev.to/api/articles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Blogs = () => {
  const [num, setNum] = useState(9);
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }
  const more = () => {
    setNum(num + 3);
  };

  return (
    <div>
      <div className="grid grid-cols-auto-fit-390 gap-5">
        {data.slice(0, num).map((blog) => {
          return (
            <BlogCard
              key={blog.id}
              image={blog.cover_image}
              title={blog.title}
              date={blog.published_at}
              tags={blog.tag_list}
            />
          );
        })}
      </div>
      <div className="flex justify-center">
        <button
          onClick={more}
          className="text-gray-300 px-5 py-3 rounded-md text-base  bg-gray-100 "
        >
          load more
        </button>
      </div>
    </div>
  );
};

const BlogCard = (props) => {
  const { image, title, date, tags } = props;
  return (
    <div className="w-fit p-4 border border-solid rounded">
      <div
        className="w-[360px] h-[240px] rounded-sm "
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="flex gap-2">
        {tags.map((tag) => {
          return (
            <button className="text-blue-500 bg-blue-200 py-2 px-4 rounded-xl  text-[9px] mt-3 ">
              {tag}
            </button>
          );
        })}
      </div>
      <h2 className="text-black font-bold text-base mt-2">{title}</h2>
      <p className=" font-normal  text-xs text-gray-300 mt-2">{date}</p>
    </div>
  );
};

export default Blogs;
