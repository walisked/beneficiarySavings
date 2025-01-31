import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { profile: {} },
  reducers: {
    setUserProfile(state, action) {
      state.profile = action.payload;
    },
  },
});

export const { setUserProfile } = userSlice.actions;
export default userSlice.reducer;