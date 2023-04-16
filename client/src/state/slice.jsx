import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  foods: [],
  bites: [],
  categories: [],
  groups: [],
};

export const slice = createSlice({
  name: "bitebook",
  initialState,
  reducers: {
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
    addFood: (state, action) => {
      state.foods.push(action.payload);
    },
    editBite: (state, action) => {
      const biteId = action.payload.id;
      const index = state.bites.findIndex((item) => item.id === biteId);
      state.foods[index] = action.payload;
    },
    removeBite: (state, action) => {
      state.bites = state.bites.filter((item) => item.id !== action.payload);
    },
    addBite: (state, action) => {
      const newBite = action.payload;
      const foodId = parseInt(newBite.food.id);
      const food = state.foods.filter((item) => item.id === foodId);
      newBite.food = food[0];
      state.bites.push(newBite);
    },
  },
});

export const {
  setUser,
  setDataState,
  editFood,
  removeFood,
  addFood,
  editBite,
  removeBite,
  addBite,
} = slice.actions;

export default slice.reducer;
