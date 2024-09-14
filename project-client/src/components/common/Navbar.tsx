function Navbar() {
  return (
    <div className="w-full h-[100px] fixed top-0 flex justify-between items-center px-10">
      <span className="text-2xl font-gopherBold text-white">NAME</span>
      <span className="flex flex-col gap-3 items-end">
        <div className="w-[30px] bg-white h-[1px]"></div>
        <div className="w-[25px] bg-white h-[1px]"></div>
        <div className="w-[30px] bg-white h-[1px]"></div>
      </span>
    </div>
  );
}

export default Navbar;
