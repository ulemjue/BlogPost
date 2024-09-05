import { useState } from "react";
import useSWR from "swr";
const url = "https://dev.to/api/articles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Trending = () => {
  const [num, setNum] = useState(4);
  const { data, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  return (
    <div className="max-w-[1000px] grid grid-cols-4 mx-auto">
      {data.slice(0, num).map((Trending) => {
        return (
          <TrendCard
            key={blog.id}
            image={blog.cover_image}
            title={blog.title}
            tags={blog.tag_list}
          />
        );
      })}
    </div>
  );
};

export default Trending;

const TrendCard = (props) => {
  const { image, title, date } = props;
  return (
    <div className="px-4 py-2 border border-solid rounded w-fit">
      <img width={300} src={image} alt={title} />
      <h2>{title}</h2>
      <p>{date}</p>
    </div>
  );
};

// const Trending = () => {
//   return (
//     <div className="w-[1230px] flex flex-col justify-center text-center h-[378px] ml-[250px] mb-10  ">
//       <div>
//         <p className="text-black font-bold mr-[750px]">Trending</p>
//       </div>
//       <div className="flex gap-14 px-[100px]  m-auto ml-[px] ">
//         <div className="card bg-base-100 image-ful ">
//           <figure>
//             <img
//               className="absolute w-[289px] h-[320px] "
//               src="Rectangle 38 (1).png"
//             />
//           </figure>
//           <div className="card-body  w-[230px] ml-4   relative mb-10">
//             <button className="btn btn-primary bg-blue-400 rounded-xl w-24 mt-40 ">
//               Technology
//             </button>
//             <p>
//               The Impact of Technology on the Workplace: How Technology is
//               Changing
//             </p>
//             <div className="card-actions justify-end"></div>
//           </div>
//         </div>
//         <div className="card bg-base-100 image-ful ">
//           <figure>
//             <img className="absolute w-[289px] h-[320px]" src=".png" />
//           </figure>
//           <div className="card-body  w-[230px] ml-4   relative mb-10">
//             <button className="btn btn-primary bg-blue-400 rounded-xl w-24 mt-40 ">
//               Technology
//             </button>
//             <p>
//               The Impact of Technology on the Workplace: How Technology is
//               Changing
//             </p>
//             <div className="card-actions justify-end"></div>
//           </div>
//         </div>
//         <div className="card bg-base-100 image-ful ">
//           <figure>
//             <img
//               className="absolute w-[289px] h-[320px]"
//               src="Rectangle 38 (1).png"
//             />
//           </figure>
//           <div className="card-body  w-[230px] ml-4   relative mb-10">
//             <button className="btn btn-primary bg-blue-400 rounded-xl w-24 mt-40 ">
//               Technology
//             </button>
//             <p>
//               The Impact of Technology on the Workplace: How Technology is
//               Changing
//             </p>
//             <div className="card-actions justify-end"></div>
//           </div>
//         </div>
//         <div className="card bg-base-100 image-ful ">
//           <figure>
//             <img
//               className="absolute w-[289px] h-[320px]"
//               src="Rectangle 38 (1).png"
//             />
//           </figure>
//           <div className="card-body  w-[230px] ml-4   relative mb-10">
//             <button className="btn btn-primary bg-blue-400 rounded-xl w-24 mt-40 ">
//               Technology
//             </button>
//             <p>
//               The Impact of Technology on the Workplace: How Technology is
//               Changing
//             </p>
//             <div className="card-actions justify-end"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Trending;
