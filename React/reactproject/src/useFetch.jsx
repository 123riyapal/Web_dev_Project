import { useState,useEffect } from "react";


function useFetch(url) {
    const [data,setData]=useState(null);
    useEffect(()=>{
      fetch(url).then((res)=>res.json()).then((d)=>setData(d));  
    },[url])
    
    return [data];
}

export default useFetch;
