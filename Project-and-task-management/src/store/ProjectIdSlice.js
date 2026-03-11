import { createSlice } from "@reduxjs/toolkit";

const ProjectIdSlice = createSlice({
  name: "projectId",
  initialState: null,
  reducers: {
<<<<<<< HEAD

    setProjectId: (state, action) => {
      return action.payload;
    }

  }
});

=======
    setProjectId: (state, action) => {
      return action.payload;
    }
  }
});
>>>>>>> c96b055c50d1da7c05d0a2d09b19643ea7643df5
export const { setProjectId } = ProjectIdSlice.actions;
export default ProjectIdSlice.reducer;