import { TypedUseSelectorHook, useSelector, useDispatch  } from "react-redux";
import { AppDispatch, TRootState } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;