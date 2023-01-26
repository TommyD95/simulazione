import axios from "axios";
import { useCallback,useState } from "react";
import api from "../../api/api";
import IPreventivo from "../../preventivo/model";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { getChiamataPreventivo } from "../../store/actions/action";
import {  preventivoSelector } from "../../store/selector";

const usePreventivo = () => {

  const dispatch = useAppDispatch();  
  

 

  const postPreventivo = async (preventivo: IPreventivo) => {
    if(!preventivo){
      console.log("error");
    }else{
      try {
        const response = await axios.post(api.preventivo, preventivo);
        console.log(response.data)
        return response.data;
      } catch (error) {
        throw console.log(error);
      } 
    }
   
  }


   const getPreventivo = () => {
      dispatch(getChiamataPreventivo(null));
  } 


 /*  const getPreventivo=()=>{
    axios.get('http://localhost:3000/preventivo')
.then(response => {
  setPreventivoGet(response.data);
})
.catch(error => {
  console.log(error);
}); */


 
  

  return {
    postPreventivo:
      useCallback((preventivo: IPreventivo) => postPreventivo(preventivo), []),
    getPreventivo:useCallback(()=>getPreventivo(),[])
  }
}

export default usePreventivo;