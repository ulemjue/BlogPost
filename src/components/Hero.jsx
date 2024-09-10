import { useState } from "react";
import useSWR from "swr";

const url = "https://dev.to/api/articles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Hero() {
  const [num, setNum] = useState(0);
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
  }
  if (error) {
    return <p>...oh sorry error</p>;
  }

  const Plus = () => {
    if (num == data.length - 1) {
      setNum(0);
    } else {
      setNum(num + 1);
    }
  };
  const Minus = () => {
    if (num <= 0) {
      setNum(data.length - 1);
    } else setNum(num - 1);
  };

  return (
    <div>
      <div className="w-[100%]">
        {data.slice(num, num + 1).map((blog) => {
          return (
            <Card
              key={blog.id}
              image={blog.cover_image}
              title={blog.title}
              date={blog.published_at}
              tags={blog.tag_list}
            />
          );
        })}
      </div>

      <div className="flex justify-end gap-3">
        <button onClick={Minus}>
          <img src="back.png"></img>
        </button>
        <button onClick={Plus}>
          <img src="forward.png"></img>
        </button>
      </div>
    </div>
  );
}

const Card = (props) => {
  const { image, title, date, tags } = props;
  return (
    <div
      className="h-[600px] flex items-end relative w-[100%] p-4 rounded"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white h-fit p-10 absolute rounded-xl  ">
        <div className="flex gap-2 ">
          {tags.slice(0, 1).map((tag) => {
            return (
              <button className="text-blue-500 bg-blue-200 py-2 px-4 rounded-xl  text-[9px] mt-10 ">
                {tag}
              </button>
            );
          })}
        </div>
        <h2 className="text-black font-bold  mt-5 text-4xl">{title}</h2>
        <p className=" font-normal mt-6  text-xs text-gray-300 ">{date}</p>
      </div>
    </div>
  );
};
