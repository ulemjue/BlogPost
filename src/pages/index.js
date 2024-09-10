import Hero from "@/components/Hero";
import Trending from "@/components/Trending";
import Blogs from "@/components/Blogs";

export default function Home() {
  return (
    <div className="p-5 grid gap-[100px]">
      <Hero />
      <Trending />
      <Blogs per="30" />
    </div>
  );
}
