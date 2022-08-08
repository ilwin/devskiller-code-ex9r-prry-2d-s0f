import { createSlice } from '@reduxjs/toolkit';
import {ISettingsModel} from "../types";

const settingsInitialState: ISettingsModel = {
    shouldShowModal: false
}
export const settingsSlice = createSlice({
    name: 'settings',
    initialState: settingsInitialState,
    reducers: {
        toggleModal: (state) => {
            state.shouldShowModal = !state.shouldShowModal;
        }
    },
})

// Action creators are generated for each case reducer function
export const {toggleModal} = settingsSlice.actions;

export default settingsSlice.reducer