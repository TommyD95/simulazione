import axios from "axios";
import { useCallback, useState } from "react";
import IContent from "../../content/model/model";

function useContentNavigation() {

    const [content,setContent]=useState<IContent[]>([]);
    const [loadingContent,setLoaingContent]=useState<boolean>(true);
    
    const getContent=()=>{
        axios.get('http://localhost:3000/content')
    .then(response => {
        setContent(response.data);
        setLoaingContent(false);
    })
    .catch(error => {
      console.log(error);
      setLoaingContent(false);
    });
   
    }

    

    return {
         getContent:useCallback(()=>getContent(),[content]),content, loadingContent
    }
}

export default useContentNavigation;