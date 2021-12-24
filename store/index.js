import { configureStore } from "@reduxjs/toolkit";
import voiceSlice from './voice-slice';

const store = configureStore({
    reducer: { voice:voiceSlice.reducer }
}); 
export default store; 