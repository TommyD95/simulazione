
import { createSelector } from "@reduxjs/toolkit";
import IPreventivo from "../preventivo/model";
import { PreventivoReducerType, PreventivoState, /* PreventivoReducerType */ } from "./reducers";

const preventivoState=(state:PreventivoState):PreventivoReducerType=>state.listaPreventivi;
export const preventivo=createSelector(preventivoState,(state:PreventivoReducerType):IPreventivo=>{
    return state.preventivo
})