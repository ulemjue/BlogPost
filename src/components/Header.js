const Header = () => {
  return (
    <div className="justify-between flex w-fit gap-5 ">
      <div className=" w-[158px] h-[36px] ">
        <img src="logo.png" />
      </div>
      <div className="flex gap-10">
        <h1 className="text-gray-400">Home</h1>
        <h1 className="text-gray-400">Blog</h1>
        <h1 className="text-gray-400 mr-10">Contact</h1>
      </div>
      <div className="bg-gray-200 w-[114px] h-[20px] flex justify-center text-center text-sm ">
        <input
          className="bg-gray-200 rounded-e-xl ml-10 "
          placeholder="Search"
        ></input>
        <img src="search-outline-1.png"></img>
      </div>
    </div>
  );
};
export default Header;
