import axios from "axios";
import { useCallback } from "react";
import api from "../../api/api";
import IPreventivo from "../../preventivo/model";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { getChiamataPreventivo } from "../../store/actions/action";
import { preventivo } from "../../store/selector";

const usePreventivo = () => {

  const dispatch = useAppDispatch();

const preventivoSelettore=useAppSelector(preventivo)


  const postPreventivo = async (preventivo: IPreventivo) => {
    try {
      const response = await axios.post(api.preventivo, preventivo);
      return response.data;
    } catch (error) {
      throw console.log(error);
    }
  }


  const getPreventivo = () => {
    dispatch(getChiamataPreventivo(null));
  }

   
 
  

  return {
    postPreventivo:
      useCallback((preventivo: IPreventivo) => postPreventivo(preventivo), []),
    getPreventivo:useCallback(()=>getPreventivo(),[]),
  }
}

export default usePreventivo;