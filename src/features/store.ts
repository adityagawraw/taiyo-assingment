import { configureStore ,} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector,useDispatch } from "react-redux";
import contactSlice from "./contact-slice";

const store = configureStore({
    reducer : {
        contact : contactSlice,
    }
});
export type RootState = ReturnType <typeof store.getState>;
export type appDispatch = typeof store.dispatch;
export const useAppSelector :TypedUseSelectorHook<RootState> = useSelector; 
export const useAppDispatch = () => useDispatch<appDispatch>();
export default store;
