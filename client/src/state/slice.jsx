import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  foods: [],
  bites: [],
  categories: [],
  groups: [],
};

function getItemById(stateArray, id) {
  return stateArray.find((item) => item.id === parseInt(id));
}

function getIndexById(stateArray, id) {
  return stateArray.findIndex((item) => item.id === parseInt(id));
}

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
    // ============  FOOD  ============
    editFood: (state, action) => {
      const foodId = action.payload.id;
      const index = getIndexById(current(state.foods), foodId);
      state.foods[index] = action.payload;
    },
    removeFood: (state, action) => {
      state.foods = state.foods.filter((item) => item.id !== action.payload);
    },
    addFood: (state, action) => {
      state.foods.push(action.payload);
    },
    // ============  BITES  ============
    editBite: (state, action) => {
      const biteId = action.payload.id;
      const foodId = action.payload.food.id;
      const biteIndex = getIndexById(current(state.bites), biteId);
      const food = getItemById(current(state.foods), foodId);
      state.bites[biteIndex] = { ...action.payload, food };
    },
    removeBite: (state, action) => {
      state.bites = state.bites.filter((item) => item.id !== action.payload);
    },
    addBite: (state, action) => {
      const newBite = action.payload;
      const food = getItemById(current(state.foods), newBite.food.id);
      newBite.food = food;
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
