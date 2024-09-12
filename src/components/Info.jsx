export default function Info() {
  return (
    <div className="max-w-[640px] mx-auto ">
      <div>
        <p className="font-bold  text-3xl mb-5 text-black ">Contact Us</p>
        <p className="text-xs text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </p>
      </div>
      <div className=" grid  grid-cols-2 gap-5 mt-10 mb-10">
        <div className=" bg-gray-100 p-5 rounded-xl">
          <p className="text-black text-3xl font-bold ">Address</p>
          <p className="text-gray-500 text-xs grid grid-cols-2 mt-2">
            1328 Oak Ridge Drive, Saint Louis, Missouri
          </p>
        </div>
        <div className=" bg-gray-100 p-5 rounded-xl">
          <p className="text-black text-3xl font-bold ">Contact</p>
          <p className="grid grid-cols-2 text-gray-500 mt-1">
            313-332-8662 info@email.com
          </p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-xl">
        <div>
          <p className="text-black font-bold text-xl  p-5">Leave a Message</p>
        </div>
        <div className="flex flex-wrap gap-5  justify-center ">
          <input
            className="bg-white rounded  text-black  p-3 "
            placeholder="Your name"
          ></input>
          <input
            className="bg-white rounded text-black p-3 "
            placeholder="Your Email"
          ></input>
          <input
            className="bg-white w-[478px] rounded  text-black  p-3 "
            placeholder="Subject"
          ></input>
          <input
            className="bg-white w-[478px] h-[120px]  text-black   mb-3 rounded p-3 "
            placeholder="Write a message"
          ></input>
        </div>
        <div className="py-4 px-[10px]">
          <button className="bg-blue-600 p-3 rounded  "> Send Message</button>
        </div>
      </div>
    </div>
  );
}
