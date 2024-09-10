import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <img className=" h-9 " src="logo.png" />
      </div>
      <ul className="flex text-black gap-6">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/Blogs"}>
          <li>Blogs</li>
        </Link>
        <Link href={"/Contact"}>
          <li>Contact</li>
        </Link>
      </ul>
      <div className="bg-gray-200  flex ">
        <input
          className="bg-gray-200 rounded-xl w-[114px] h-[20px]"
          placeholder="Search"
        ></input>
        <img src="search-outline-1.png" />
      </div>
    </div>
  );
};
const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-3   ">
        <div className=" w-[289px] h-[236px] text-gray-500">
          <p className="text-black font-bold">About</p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
          <p>Email : info@jstemplate.net</p>
          <p>Phone : 880 123 456 789</p>
        </div>
        <div className=" flex  flex-col justify-center text-center text-gray-500  ">
          <p>Home</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div>
          <img src="Social wrapper.png"></img>
        </div>
      </div>
      <div className="flex gap-3  m-auto border-t-4">
        <div>
          <img src="Logo (1).png"></img>
        </div>
        <div className="text-black">
          <img src="MetaBlog.png"></img>© All Rights Reserved.
        </div>
        <div className="text-black ml-auto ">
          Terms of Use | Privacy Policy | Cookie Policy
        </div>
      </div>
    </div>
  );
};

export default Footer;

export { Header, Footer };
