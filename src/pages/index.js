import Header from "../components/Header";
import Content from "@/components/Content";
import Blogs from "../components/Blogs";
// import moment from "moment";

export default function Home() {
  return (
    <div className="w-[1216px] bg-white">
      <div className="px-[350px] py-8 bg-white">
        <Header />
      </div>

      <div>
        <Content />
      </div>
      <div className="w-[1216px] m-auto flex justify-center text-center  ">
        <Blogs />
      </div>
    </div>
  );
}
