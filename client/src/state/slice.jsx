import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foods: [],
  bites: [],
  categories: [],
  groups: [],
  user: {
    uid: "",
    name: "",
  },
};

export const slice = createSlice({
  name: "bitebook",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const user = action.payload;
      console.log("user", user);
      state.user.uid = user.uid;
      state.user.name = user.name;
    },
    setDataState: (state, action) => {
      state.foods = action.payload.foods;
      state.bites = action.payload.bites;
      state.categories = action.payload.categories;
      state.groups = action.payload.groups;
    },
    editFood: (state, action) => {
      const foodId = action.payload.id;
      const index = state.foods.findIndex((item) => item.id === foodId);
      state.foods[index] = action.payload;
    },
    removeFood: (state, action) => {
      state.foods = state.foods.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setUser, setDataState, editFood, removeFood } = slice.actions;

export default slice.reducer;
