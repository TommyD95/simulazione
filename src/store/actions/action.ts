import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import IPreventivo from "../../preventivo/model";

type FetchError={
message:string
}


export const getChiamataPreventivo = createAsyncThunk<IPreventivo,any,{rejectValue:FetchError}>('preventivo/getChiamataPreventivo', async (_:any,thunkApi) => {
    try {
        const response = await axios.get(`http://localhost:3000/preventivo`);
        const data:IPreventivo=response.data;
        if(response.status !== 200){
            return thunkApi.rejectWithValue({message:"failed"})
        }
        return data;
    } catch (error) {
        const errorMessage = 'There was an error';
        throw new Error(errorMessage);
    }
});


