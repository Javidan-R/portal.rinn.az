// searchAdvancedSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Organisation } from '../types/type';

export interface FiltersState {
    paid: boolean;
    dontPaid: boolean;
    registered: boolean;
    dontRegistered: boolean;
    selectedOrganization: string;
    selectedCategory: string;
    
}

export interface SearchAdvancedState {
    filters: FiltersState;
    filteredOrganisations: Organisation[];
}

const initialState: SearchAdvancedState = {
    filters: {
        paid: false,
        dontPaid: false,
        registered: false,
        dontRegistered: false,
        selectedOrganization: '',
        selectedCategory: ''
    },
    filteredOrganisations: []
};

const searchAdvancedSlice = createSlice({
    name: 'searchAdvanced',
    initialState,
    reducers: {
        updateFilters(state, action: PayloadAction<Partial<FiltersState>>) {
            state.filters = { ...state.filters, ...action.payload };
        },
        resetFilters(state) {
            state.filters = initialState.filters;
        },
        updateFilteredOrganisations(state, action: PayloadAction<Organisation[]>) {
            state.filteredOrganisations = action.payload;
        }
    }
});

export const { updateFilters, resetFilters, updateFilteredOrganisations } = searchAdvancedSlice.actions;

export const selectFilters = (state: { searchAdvanced: SearchAdvancedState }) => state.searchAdvanced.filters;
export const selectFilteredOrganisations = (state: { searchAdvanced: SearchAdvancedState }) => state.searchAdvanced.filteredOrganisations;

export default searchAdvancedSlice.reducer;
