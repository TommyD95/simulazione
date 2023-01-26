
import { createSelector } from "@reduxjs/toolkit";
import IPreventivo from "../preventivo/model";
import { PreventivoReducerType, PreventivoState, /* PreventivoReducerType */ } from "./reducers";

const preventivoState=(state:PreventivoState):PreventivoReducerType=>state.preventivo;
export const preventivoSelector=createSelector(preventivoState,(state:PreventivoReducerType):IPreventivo[]=>{
    return state.preventivo;
})
