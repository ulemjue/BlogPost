import Header from "../components/Header";
import Content from "@/components/Content";
import Trending from "@/components/Trending";
import Blogs from "../components/Blogs";
// import Daisy from "@/components/daisy";
// import moment from "moment";
export default function Home() {
  return (
    <div className="max-w-[1920px] mx-auto bg-white">
      <div className="px-[350px] py-8">
        <Header />
      </div>
      <div className="px-[350px] py-8">
        <Content />
      </div>
      <div>
        <Trending />
      </div>
      <div className="px-[350px] py-8  ">
        <Blogs />
      </div>
    </div>
  );
}
