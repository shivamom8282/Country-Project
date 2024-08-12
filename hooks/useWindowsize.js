// custom hook
import { useEffect, useState } from "react";

export function usewindowsize()
{
    const[windowsize,setsize]=useState({height:window.innerHeight,width:window.innerWidth})
    useEffect(()=>
    {
      window.addEventListener("resize",()=>
      {
        setsize({height:window.innerHeight,width:window.innerWidth})
      })
  
    },[])
    return windowsize;
}