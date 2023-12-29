import { useEffect,useRef } from "react";

const useSticky = (stickyStartOffset=0.3, customTop='0',refName)=>{

  const ref = refName;
  useEffect(()=>{
    const handleScroll=()=>{
      if(ref.current){
        const stickyStart=ref.current.offsetTop-window.innerHeight*stickyStartOffset;
        const isSticky=window.scrollY>stickyStart;
        ref.current.style.position= isSticky ? 'fixed':'absolute';
        ref.current.style.top = customTop;
      }
    };
    window.addEventListener('scroll',handleScroll);
    return()=>window.removeEventListener('scroll',handleScroll);
  },[stickyStartOffset,customTop,ref]);
  refName = ref;  

};

export default useSticky;