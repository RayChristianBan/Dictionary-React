import { useContext, useState } from "react";
import { InputContext } from "../App";

const Header = () => {
  const [value, setValue] = useState("");
  const {setInputValue } = useContext(InputContext);

  const handleInputChange = e => setValue(e.target.value);

  const handleSubmit = () => {
    setInputValue(value);
    setValue("");
  }

  const handleInputKeyDown = (e) => {
    if(e.key === 'Enter') {
      setInputValue(value);
      setValue("")
    }
  }

  return (
    <div className="bg-[#008080]">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center text-white">Dictionary</h1>
        <p className="text-center mt-1 mb-10 text-slate-300 text-lg">Find Meaning for the word</p>
      
         {/* Search Bar Section */}
        <div className="flex items-center justify-center mt-">
          <div className="flex ">
            <input className="px-4 py-2 md:w-80 rounded-xl border-none cursor-pointer" type="text" placeholder="Type word here..." onChange={handleInputChange} value={value} onKeyDown={handleInputKeyDown} />
            <button className="bg-[#00AEAE] hover:text-white hover:bg-[#6A5ACD] px-4 py-2 text-white rounded-xl" onClick={handleSubmit}>Search</button>
          </div>
        </div>
        <div className="flex items-center justify-center mt-5">
            <div className="grid gap-52 grid-cols-2">
            <h4 className=" text-white pr-5 font-semibold">Thesaurus</h4>
            <h4 className=" text-white pr-5 font-semibold">Dictionary</h4> 
            </div>
        </div>
    
      </div>
      
    </div>
  );
};

export default Header;