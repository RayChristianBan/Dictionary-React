import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { InputContext } from "../App";
import Antonym from "./Antonym";
import Example from "./Example";
import Meanings from "./Meanings";
import Synonym from "./Synonym";
import { ImShocked } from "react-icons/im";



axios.defaults.baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en';


const Result = () => {
  const { inputValue } = useContext(InputContext);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (param) => {
    try {
      setLoading(true);
      const res = await axios(`/${param}`);
      setResponse(res.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if(inputValue.length) {
      fetchData(inputValue)
    }
  }, [inputValue]);

  if(loading) {
    return (
      <div className="text-center flex items-center justify-center h-[40vh]">
      </div>
    )
  }

  if(error) {
    return <h3 className="text-center mt-10 font-semibold text-gray-500">No Definitions Found <ImShocked /> </h3>
  }

  return (

        <section className="m-auto w-[80%] ">
          <div> {/* Ternary Operator showing No data if the search result is empty */}
            {response ? (
              <div>
                <h1 className="text-start font-semibold mt-5 text-2xl text-[#F0F8FF]">
                  Results for the word "{inputValue}"
                </h1>
                <div className="mt-5">
                  <h1 className="text-xl font-semibold text-[#AFEEEE]">Meaning & Definition:</h1>
                  <Meanings mean={response} />
                  <h1 className="text-xl font-semibold mt-5 text-[#AFEEEE]">Example:</h1>
                  <Example mean={response} />
                  <h1 className="text-xl font-semibold mt-5 text-[#AFEEEE]">Synonym:</h1>
                  <Synonym mean={response} />
                  <h1 className="text-xl font-semibold mt-5 text-[#AFEEEE]">Antonym:</h1>
                  <Antonym mean={response} />
                </div>
              </div>
            ) : (
              <div className="lg:flex items-center justify-center  mt-20">
            
                <div className=" rounded-md border-2 border-[#66b2b2] p-5 overflow-hidden  ">
                  <div className="relative ">
                    <h1 className="font-bold text-[18px] text-[#F0F8FF]">WORD OF THE DAY</h1>
                    <div className="absolute top-0 hidden md:block right-5 rounded-full w-[50px]">
                      <img className="w-full h-full object-cover rounded-full" src="/sound.png" alt="" />
                    </div>
                    <h1 className="font-bold text-[36px] text-[#F0F8FF]">success</h1>
                    <br/>
                    <div className="flex items-center gap-5">
                      <p className="font-bold text-[#F0F8FF] ">{`[səkˈsɛs]`}</p>
                      <p className="text-[#AFEEEE] font-semibold underline ">Meaning and Examples</p>
                    </div>
                    <p className="text-[#F0F8FF]">Start each day with the word of the Day in your inbox!</p>
                  </div>
                </div>
                <div className="w-[300px] hidden lg:block pl-5">
                  <img className="w-[250px] object-cover" src="/search.svg" alt="" />
                </div>
              </div>
            )}
          </div>
          {/* It can also use Logical Operator &&  */}
          {/* {!response && (<div> No Data </div>)} */}
        </section>

  );
};

export default Result;