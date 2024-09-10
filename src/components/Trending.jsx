import { useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Trending(props) {
  const { per } = props;
  const url = `https://dev.to/api/articles?per_page=${per}`;
  const [num, setNum] = useState(4);
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  return (
    <div className="bg-red-300">
      <div>
        <p className="text-black font-bold">Trending</p>
      </div>
      <div className="grid grid-cols-auto-fit-390 gap-5">
        {data.slice(0, num).map((blog) => {
          return (
            <TrendCard
              key={blog.id}
              image={blog.cover_image}
              title={blog.title}
              date={blog.published_at}
              tags={blog.tag_list}
            />
          );
        })}
      </div>
    </div>
  );
}

const TrendCard = (props) => {
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
