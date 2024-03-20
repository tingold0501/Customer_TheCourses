
function Progress() {
  return (
    <div className="mt-2 ml-10 sm:ml-80 h-4 relative w-60 rounded-full overflow-hidden">
        <div className=" w-full h-full bg-gray-200 absolute "></div>
        <div className=" h-full bg-yellow-400 sm:bg-green-500 absolute " style={{width:80}} ></div>
    </div>
  );
}

export default Progress;
