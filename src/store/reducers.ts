import { createReducer } from "@reduxjs/toolkit";
import IPreventivo from "../preventivo/model";

import { getChiamataPreventivo } from "./actions/action";



export interface PreventivoReducerType {
    preventivo: IPreventivo,
    status: "loading" | "idle",
    error: string | null,
};

export interface PreventivoState {
    listaPreventivi: PreventivoReducerType
}

const initialState: PreventivoReducerType = {  
        preventivo: {
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
        },
        status: "loading",
        error: null,
    
};


export const preventivoReducer = createReducer(initialState, (builder) => {
    builder.addCase(getChiamataPreventivo.pending, (state) => {
        console.log('getPreventivo pending')

        state.status = "loading";
        state.error = null;
    })
        .addCase(getChiamataPreventivo.fulfilled, (state, { payload }) => {
            state.preventivo = { ...payload };
            state.status = "idle";
        })
        .addCase(getChiamataPreventivo.rejected, (state, { payload }) => {
            if (payload) {
                state.error = payload.message
            }
        })

}

)