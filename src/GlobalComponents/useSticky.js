import { useEffect,useRef } from "react";

const useSticky = (refs,stickyStartOffset=0.3, customTop='0')=>{

  useEffect(()=>{
    const handleScroll=()=>{
      refs.forEach(ref=>{
        if(ref.current){
          const stickyStart=ref.current.offsetTop-window.innerHeight*stickyStartOffset;
          const isSticky=window.scrollY>stickyStart;
          ref.current.style.position= isSticky ? 'fixed':'absolute';
          ref.current.style.top = customTop;
        }
      });
    };        
    window.addEventListener('scroll',handleScroll);
    return()=>window.removeEventListener('scroll',handleScroll);
  },[refs,stickyStartOffset,customTop]);   

};

export default useSticky;