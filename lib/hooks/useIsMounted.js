import { useState, useEffect } from "react";
export default () => {
    
    const [isMounted, setIsMounted] = useState(false);

    useEffect(()=>{
        setIsMounted(true);
    },[]);

    return isMounted;
}