import Hero from "@/components/Hero";
import Trending from "@/components/Trending";
import Blogs from "@/components/Blogs";

import { ThemeContext } from "@/components/ThemeContext";
import { useContext } from "react";

export default function Home() {
  const light = useContext(ThemeContext);
  console.log(light);
  return (
    <div className="p-5 grid gap-[100px]">
      <button onClick={() => setDark("dark,light")}></button>
      <Hero />
      <Trending per={30} />
      <Blogs per="30" />
    </div>
  );
}
