import {City} from '../../types/city';
import {cities, SortingValueTypes, NameSpace} from '../../const';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppProcess} from '../../types/state';

const initialState: AppProcess = {
  city: cities[1],
  sortType: SortingValueTypes.POPULAR,
  userEmail: null,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    },
    setUserEmail: (state, action: PayloadAction<string | null>) => {
      state.userEmail = action.payload;
    },
    sortOffers: (state, action: PayloadAction<{sortType: SortingValueTypes}>) => {
      state.sortType = action.payload.sortType;
    },
  },
});

export const {changeCity, setUserEmail, sortOffers} = appProcess.actions;
