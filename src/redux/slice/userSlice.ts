import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ILoginResult} from "../../shared/interfaces/ILoginResult.ts";

interface IUserState {
  user: ILoginResult | null;
}

const initialState: IUserState = {
  user: null,
};

export const userSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<ILoginResult>) => {
      state.user = action.payload;
    },
  },
});