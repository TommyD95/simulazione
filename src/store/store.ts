import { Action, configureStore, createAsyncThunk, ThunkAction } from "@reduxjs/toolkit";
import { preventivoReducer } from "./reducers";



export const store=configureStore({
    reducer:{
        preventivo:preventivoReducer,    
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;



