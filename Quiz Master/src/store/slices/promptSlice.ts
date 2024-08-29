import { createSlice } from "@reduxjs/toolkit";


export type proptState = {
    visible: boolean;
    onConfirm?: () => void;
};

const initialState: proptState = {
    visible: false
};

const promptSlice = createSlice({
    name: 'prompt',
    initialState,
    reducers: {
        showPrompt: (state, action) => {
            state.onConfirm = action.payload;
            state.visible = true;
        },
        hidePrompt: (state, _) =>{
            state.onConfirm = undefined;
            state.visible = false;
        }
    }
})

export const promptReducer = promptSlice.reducer;
export const { showPrompt, hidePrompt } = promptSlice.actions;