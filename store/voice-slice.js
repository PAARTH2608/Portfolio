import { createSlice } from "@reduxjs/toolkit";

const voiceSlice = createSlice({
    name: 'voice',
    initialState: {
        voiceFac: false
    },
    reducers: {
        updateVoiceCommand(state, action) {
            state.voiceFac = action.payload;
        },
    }
});
export const voiceActions = voiceSlice.actions;
export default voiceSlice;