import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import api from "../../api/api";
import IPreventivo from "../../preventivo/model";

const usePreventivo=()=>{

    const [preventivoGet,setPreventivoGet]=useState<IPreventivo>({
      tipoRisultato: undefined,
      showDatiFinanziari: false,
      expandDatiAnagrafici: true,
      expandDatiFinanziari: false,
      modalConvenzioneVisible: false,
      modalConvenzioneMessage: "",
      importoRichiestoMin: 1000,
      importoRichiestoMax: 75000,
      importoRataMin: 0,
      importoRataMax: 0,
      importoRata: "0",
      durata: 24,
      dataNascita: "",
      dataAssunzione: "",
      campagnaCodice: "",
      campagnaToken: "",
      codiceTipoRichiedente: "",
      cognome: "",
      convenzioneCodice: "",
      importoNettoRedditoMensile: "0",
      importoRichiesto: "0",
      isSubmitted: false,
      nome: ""
    })

    const postPreventivo=async (preventivo: IPreventivo) => {
        try {
          const response = await axios.post(api.preventivo, preventivo);
          return response.data;
        } catch (error) {
          throw console.log(error);
        }
      }

      const getPreventivo=()=>{
        axios.get('http://localhost:3000/preventivo')
    .then(response => {
      setPreventivoGet(response.data);
    })
    .catch(error => {
      console.log(error);
    });
   
    }



return {
    postPreventivo:useCallback((preventivo:IPreventivo)=>postPreventivo(preventivo),[]),getPreventivo:useCallback(()=>getPreventivo(),[preventivoGet]),preventivoGet
}
}

export default usePreventivo;