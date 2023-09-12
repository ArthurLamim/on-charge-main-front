import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {totenApi} from "./api/totenApi.ts";
import {userApi} from "./api/userApi.ts";
import {authApi} from "./api/authApi.ts";
import {userSlice} from "./slice/userSlice.ts";

export const store = configureStore({
  reducer: {
    [totenApi.reducerPath]: totenApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userSlice.name]: userSlice.reducer
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({})
    .concat(totenApi.middleware)
    .concat(userApi.middleware)
    .concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;