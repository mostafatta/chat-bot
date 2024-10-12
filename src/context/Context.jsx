import { createContext, useEffect, useState } from "react";
import run from "../config/Gmini";
export const Context = createContext();

const ContextProvider = (props) => {
    const [input,setInput]=useState(""); //save the input data
    const [recentPrompt,setRecentPrompt]=useState("")//will save the input and display it on the main
    const [prevPrompts,setPrevPrompts]=useState([])//restore all the input history
    const [showResult,setShowResult]=useState(false) //it will hide the boxes and display the result
    const [loading,setLoading]=useState(false)//display loading animation
    const [resultData,setResultData]=useState("")//display result
  
  // Function to send the prompt
  const onSent = async (prompt) => {
    if(input.trim()){
        setInput("")
      try{
        setResultData("")
        setRecentPrompt(input);
        setShowResult(true)
        setLoading(true)
        setPrevPrompts((prev) => [...prev, input]);
        const response = await run(input);
        setResultData(response);
        setLoading(false)


      }
      catch (error) {
        console.error("error sending prompt:",error)

      }
    }
    

  }

  // Send a prompt when the component mounts (for testing)
  useEffect(() => {
    onSent(input);
   
  }, []);

  // Context value can hold any data you want to pass down
  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    setShowResult, // Add setShowResult to context
    loading,
    setLoading, // Add setLoading to context
    resultData,
    setResultData,
    input,
    setInput
  };
  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
