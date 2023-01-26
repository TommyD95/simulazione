import { createReducer } from "@reduxjs/toolkit";
import IPreventivo from "../preventivo/model";

import { getChiamataPreventivo } from "./actions/action";



export interface PreventivoReducerType {
    preventivo: IPreventivo[],
    status: "loading" | "idle",
    error: string | null,
};

export interface PreventivoState {
    preventivo: PreventivoReducerType
} 

const initialState: PreventivoReducerType = {  
        preventivo: [],
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
            state.preventivo = [...payload];
            state.status = "idle";
        })
        .addCase(getChiamataPreventivo.rejected, (state, { payload }) => {
            if (payload) {
                state.error = payload.message
            }
        })

}

)