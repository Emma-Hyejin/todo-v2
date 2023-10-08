import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface ClearState {
  isComplete: boolean;
}

const initialState: ClearState = {
  isComplete: false,
};

export const clearSlice = createSlice({
  name: 'complete',
  //   initialState: {
  //     bookmark: false,
  //   },
  initialState,
  reducers: {
    addBookmark: (state) => {
      state.isComplete = true;
    },
    deleteBookmark: (state) => {
      state.isComplete = false;
    },
  },
});

export const { addBookmark, deleteBookmark } = clearSlice.actions;
// export default counterSlice.reducer;
export const selectCount = (state: RootState) => state.complete.isComplete;
export default clearSlice.reducer;
