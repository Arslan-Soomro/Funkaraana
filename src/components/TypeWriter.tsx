import { FC, useEffect, useRef, useState } from "react";

const TypeWriter = ({words, styleClasses}: {words: string[], styleClasses?: string}) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [wordInd, setWordInd] = useState(0);
  const [text, setText] = useState(words[0]);
  const [curInd, setCurInd] = useState(0);
  const [mode, setMode] = useState("write");
  const delay = 400;

  const textWrite = () => {
    if (mode === "write" && text != undefined && curInd < text.length) {
      setTimeout(() => {
        setCurInd(curInd + 1);
        if (text != undefined && textRef.current != undefined)
          textRef.current.innerText += text.charAt(curInd);
      }, delay);
    }else{
        setTimeout(() => setMode("erase") , delay);
    }
  };

  const textErase = () => {
    if (mode === "erase" && text != undefined && curInd > 0) {
      setTimeout(() => {
        setCurInd(curInd - 1);
        if (textRef.current != undefined)
          textRef.current.innerText = textRef.current.innerText.slice(0, -1);
      }, delay);
    }else{
        
        //First Change The Word
        if(wordInd === words.length - 1){
            setWordInd(0);
        }else{
            setWordInd(() => wordInd + 1);
        }
        
        //Then Write
        setTimeout(() => setMode("write") , delay);
    }
  };
  
  //FIXME this hook produces a memory leak
  useEffect(() => {
    if(text != undefined){
        if(mode === "write"){
            textWrite();
        }else if(mode === "erase"){
            textErase();
        }
    }
  }, [curInd, mode]);
  
  
  useEffect(() => {
    setText(words[wordInd]);
  }, [wordInd])

  return (
    <span className={"w-fit border-r caret " + styleClasses} ref={textRef}></span>
  );
};

export default TypeWriter;
