import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  foods: [],
  bites: [],
  people: [],
  categories: [],
  groups: [],
  activeFilters: { colour: [], flavour: [], texture: [] },
  filteredFoods: [],
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
      state.filteredFoods = state.foods; // initalise with all foods for dashboard charts
      state.bites = action.payload.bites;
      state.people = action.payload.people;
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
      state.foods.unshift(action.payload);
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
      state.bites.unshift(newBite);
    },
    // ============  PEOPLE  ============
    /**
     * updates the given person in state
     * @param  {object} action a food object
     */
    editPerson: (state, action) => {
      const personId = action.payload.id;
      const index = getIndexById(current(state.people), personId);
      state.people[index] = action.payload;
    },
    /**
     * removes a person from state by id
     * @param  {int} action the id of the person to be removed
     */
    removePerson: (state, action) => {
      state.people = state.people.filter((item) => item.id !== action.payload);
    },
    /**
     * adds a person to state
     * @param  {object} action a person object
     */
    addPerson: (state, action) => {
      state.people.unshift(action.payload);
    },
    // ============  SORT & FILTER  ============
    /**
     * reorders the state foods list
     * @param  {string} action the key to sort the objects by
     */
    sortFoods: (state, action) => {
      const key = action.payload.key.toLowerCase();
      const direction = action.payload.direction;

      if (key === "bites") {
        if (direction === "asc") {
          state.foods.sort((a, b) =>
            a.bites.length < b.bites.length
              ? -1
              : b.bites.length < a.bites.length
              ? 1
              : 0
          );
        }

        if (direction === "desc") {
          state.foods.sort((a, b) =>
            a.bites.length < b.bites.length
              ? 1
              : b.bites.length < a.bites.length
              ? -1
              : 0
          );
        }
      } else {
        if (direction === "asc") {
          state.foods = [...current(state.foods)].sort((a, b) =>
            a[key]?.localeCompare(b[key]?.toString(), "en", { numeric: true })
          );
        }

        if (direction === "desc") {
          state.foods = [...current(state.foods)].sort((a, b) =>
            b[key]?.localeCompare(a[key]?.toString(), "en", { numeric: true })
          );
        }
      }
    },
    /**
     * Used in dashboard view to filter charts
     * Filters the full food list using the colour/flavour/texture options
     * @param  {string} action the value to filter on
     */
    filterFoods: (state, action) => {
      state.filteredFoods = state.foods; // reset foods list

      const category = action.payload.category;
      const values = action.payload.selected;
      state.activeFilters[category] = values;

      for (const [key, value] of Object.entries(state.activeFilters)) {
        if (value.length) {
          state.filteredFoods = state.filteredFoods.filter((food) =>
            value.some((v) => food[key].toLowerCase().includes(v))
          );
        }
      }
    },
    resetFilters: (state) => {
      state.filteredFoods = state.foods;
    },
  },
});

export const {
  setDataState,
  editFood,
  removeFood,
  addFood,
  editBite,
  removeBite,
  addBite,
  editPerson,
  removePerson,
  addPerson,
  sortFoods,
  filterFoods,
  resetFilters,
} = slice.actions;

export default slice.reducer;
