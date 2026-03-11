import { createSlice } from "@reduxjs/toolkit";

const ProjectIdSlice = createSlice({
  name: "projectId",
  initialState: null,
  reducers: {

    setProjectId: (state, action) => {
      return action.payload;
    }

  }
});

export const { setProjectId } = ProjectIdSlice.actions;
export default ProjectIdSlice.reducer;