import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface ClearState {
  completeTask: number;
}

const initialState: ClearState = {
  completeTask: 0,
};

export const clearSlice = createSlice({
  name: 'complete',
  //   initialState: {
  //     bookmark: false,
  //   },
  initialState,
  reducers: {
    addCompletTask: (state) => {
      state.completeTask += 1;
    },
    deleteCompleteTask: (state) => {
      state.completeTask -= 1;
    },
  },
});

export const { addCompletTask, deleteCompleteTask } = clearSlice.actions;
// export default counterSlice.reducer;
export const completedCount = (state: RootState) => state.complete.completeTask;
export default clearSlice.reducer;
