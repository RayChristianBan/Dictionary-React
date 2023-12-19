import { createContext, useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";

export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState("");

  const value = {
    inputValue, setInputValue
  }

  return (
    <InputContext.Provider value={value}>
      <div className="App">
        <Header />
        <Result />
      </div>
    </InputContext.Provider>
  );
}

export default App;