// servicesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Service } from '../types/type';

interface ServicesState {
  selectedService: Service[] | null;
}

const initialState: ServicesState = {
  selectedService: null,
};

const servicesSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    setSelectedService: (state, action: PayloadAction<Service[] | null>) => {
      state.selectedService = action.payload;
    },
  },
});

export const { setSelectedService } = servicesSlice.actions;
export const selectSelectedService = (state: { services: ServicesState }) => state.services.selectedService;

export default servicesSlice.reducer;
