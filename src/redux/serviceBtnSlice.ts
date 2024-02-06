// servicesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BtnData, } from '../types/type';

interface ServicesState {
  selectedService: BtnData[] | null;
}

const initialState: ServicesState = {
  selectedService: null,
};

const servicesSlice = createSlice({
  name: 'buttons',
  initialState,
  reducers: {
    setSelectedService: (state, action: PayloadAction<BtnData[] | null>) => {
      state.selectedService = action.payload;
    },
  },
});

export const { setSelectedService } = servicesSlice.actions;
export const selectSelectedService = (state: { services: ServicesState }) => state.services.selectedService;

export default servicesSlice.reducer;
