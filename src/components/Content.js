import { useState } from "react";
import useSWR from "swr";

const url = "https://dev.to/api/articles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Content = () => {
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
      <div className="grid grid-cols-auto-fit-390 gap-5">
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
};
export default Content;

const Card = (props) => {
  const { image, title, date, tags } = props;
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-[1216px] h-[600px] p-4 border border-solid rounded"
    >
      <div className="bg-white w-[598px] h-[252px] rounded-xl ">
        <div className="flex gap-2 mt-[300px]">
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
