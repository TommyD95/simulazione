import { isParameter } from "typescript"

type IPreventivo={
     tipoRisultato: undefined;
     showDatiFinanziari: boolean;
     expandDatiAnagrafici: boolean;
     expandDatiFinanziari: boolean;
     modalConvenzioneVisible: boolean;
     modalConvenzioneMessage: string;
     importoRichiestoMin: number;
     importoRichiestoMax: number;
     importoRataMin: number;
     importoRataMax: number;
     importoRichiesto: string;
     codiceTipoRichiedente: string;
     dataNascita: string;
     dataAssunzione: string;
     importoNettoRedditoMensile: string;
     importoRata: string;
     durata: number;
     convenzioneCodice: string;
     campagnaToken: string;
     campagnaCodice: string;
     nome: string;
     cognome: string;
     isSubmitted: boolean;
}

export default IPreventivo;