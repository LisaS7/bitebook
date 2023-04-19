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
    /**
     * sets the initial state from the fetch calls in App.js
     * @param  {object} action an object with keys foods, bites, categories, and groups
     */
    setDataState: (state, action) => {
      state.foods = action.payload.foods;
      state.bites = action.payload.bites;
      state.categories = action.payload.categories;
      state.groups = action.payload.groups;
    },
    // ============  FOOD  ============
    /**
     * updates the given food in state
     * @param  {object} action a food object
     */
    editFood: (state, action) => {
      const foodId = action.payload.id;
      const index = getIndexById(current(state.foods), foodId);
      state.foods[index] = action.payload;
    },
    /**
     * removes a food from state by id
     * @param  {int} action the id of the food to be removed
     */
    removeFood: (state, action) => {
      state.foods = state.foods.filter((item) => item.id !== action.payload);
    },
    /**
     * adds a food to state
     * @param  {object} action a food object
     */
    addFood: (state, action) => {
      state.foods.push(action.payload);
    },
    /**
     * reorders the state foods list
     * @param  {string} action the key to sort the objects by
     */
    sortFoods: (state, action) => {
      const key = action.payload;

      function compare(a, b) {
        if (a[key] < b[key]) {
          return -1;
        }
        if (a[key] > b[key]) {
          return 1;
        }
        return 0;
      }
      state.foods = state.foods.sort(compare);
    },
    // ============  BITES  ============
    /**
     * updates the given bite in state
     * @param  {object} action a bite object, which must contain a food object
     */
    editBite: (state, action) => {
      const biteId = action.payload.id;
      const foodId = action.payload.food.id;
      const biteIndex = getIndexById(current(state.bites), biteId);
      const food = getItemById(current(state.foods), foodId);
      state.bites[biteIndex] = { ...action.payload, food };
    },
    /**
     * removes a bite from state by id
     * @param  {int} action the id of the bite to be removed
     */
    removeBite: (state, action) => {
      state.bites = state.bites.filter((item) => item.id !== action.payload);
    },
    /**
     * adds a bite to state
     * @param  {object} action a bite object. The "food" property of the bite must contain the food id, e.g. food: {id: 2}
     */
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
  sortFoods,
  editBite,
  removeBite,
  addBite,
} = slice.actions;

export default slice.reducer;
