import useSWR from "swr";
const url = "https://dev.to/api/articles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Blogs = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  return (
    // <div className="grid grid-cols-4 mx-auto mt-[100px] ">
    <div>
      {data.map((blog) => {
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
  );
};

export default Blogs;

const BlogCard = (props) => {
  const { image, title, date, tags } = props;
  return (
    <div className="w-fit  px-4 py-2 border border-solid rounded  m-auto bg-white">
      <div
        className="w-[360px] h-[240px] rounded-sm"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="flex gap-2">
        {tags.map((tag) => {
          return (
            <button className="text-blue-500 bg-blue-200 py-2 px-4 rounded-xl  text-[9px]">
              {tag}
            </button>
          );
        })}
      </div>
      <h2 className="text-black">{title}</h2>
      <p className="text-black">{date}</p>
    </div>
  );
};
