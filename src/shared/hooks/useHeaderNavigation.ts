import axios from "axios";
import { useCallback, useState } from "react";
import IMenu from "../../menus/model/model";

function useHeaderNavigation() {

    const [menus,setMenus]=useState<IMenu[]>([]);
    const [loading,setLoaing]=useState<boolean>(true);
    
    const getMenu=()=>{
        axios.get('http://localhost:3000/menus')
    .then(response => {
        setMenus(response.data);
        setLoaing(false);
    })
    .catch(error => {
      console.log(error);
      setLoaing(false);
    });
   
    }

    

    return {
        getMenu:useCallback(()=>getMenu(),[menus]),menus,loading
    }
}

export default useHeaderNavigation;