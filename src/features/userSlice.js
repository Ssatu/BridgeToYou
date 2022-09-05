import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "George",
    therapyObj: "To be able to control my emotions",
    totalSessions: 8,
    completedSessions: 0,
    lastWeek: ["Waiting on the therapist for updates!"],
    fable: null,
    emotions: [],
    feedback: "",
  },
  reducers: {
    updateCompleted: (state, action) => {
      state.completedSessions = action.payload;
    },
    updateLastWeek: (state, action) => {
      state.lastWeek = action.payload;
    },
    updateFable: (state, action) => {
      state.fable = action.payload;
    },
    updateEmotions: (state, action) => {
      state.emotions = action.payload;
    },
    updateFeedback: (state, action) => {
      state.feedback = action.payload;
    },
  },
});

export const {
  updateCompleted,
  updateLastWeek,
  updateFable,
  updateFeedback,
  updateEmotions,
} = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
