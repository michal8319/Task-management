import { createSlice } from "@reduxjs/toolkit";

const TaskIdSlice = createSlice({
  name: "taskId",
  initialState: null,
  reducers: {

    setTaskId: (state, action) => {
      return action.payload;
    }

  }
});

export const { setTaskId } = TaskIdSlice.actions;
export default TaskIdSlice.reducer;