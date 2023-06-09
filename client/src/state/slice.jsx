import { createSlice, current } from "@reduxjs/toolkit";
import _ from "underscore";

const initialState = {
  foods: [],
  foodRecords: [],
  bites: [],
  people: [],
  categories: [],
  groups: [],
  activePerson: {},
  activeData: {
    foodRecords: [],
    bites: [],
    filteredFoodRecords: [],
    filteredBites: [],
  },
  activeFilters: { colour: [], flavour: [], texture: [] },
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
      state.foodRecords = action.payload.foodRecords;
      state.bites = action.payload.bites;
      state.people = action.payload.people;
      state.categories = action.payload.categories;
      state.groups = action.payload.groups;
    },
    // ============  ADD,EDIT,DELETE ACTIONS  ============
    /**
     * updates the given item in state
     * @param  {object} action.payload.item an object
     * @param {string} action.payload.stateList the list to update in state
     */
    editStateItem: (state, action) => {
      const list = action.payload.list;

      const item = { ...action.payload.item };

      if (item.food) {
        const food = getItemById(current(state.foods), item.id);
        item.food = food;
      }

      if (item.person) {
        const person = getItemById(current(state.people), item.person.id);
        item.person = person;
      }

      const index = getIndexById(current(state[list]), item.id);
      state[list][index] = item;
    },
    /**
     * removes an item from state by id
     * @param  {int} action.payload.id the id of the item to be removed
     * @param {string} action.payload.stateList the state list to remove the item from
     */
    removeStateItem: (state, action) => {
      const list = action.payload.list;
      state[list] = state[list].filter((item) => item.id !== action.payload.id);
    },
    /**
     * adds an item to state
     * @param  {object} action.payload.item an object
     * @param {string} action.payload.stateList the list to update in state
     */
    addStateItem: (state, action) => {
      const list = action.payload.list;
      const item = { ...action.payload.item };
      if (item.food) {
        const food = getItemById(current(state.foods), item.food.id);
        item.food = food;
      }
      if (item.person) {
        const person = getItemById(current(state.people), item.person.id);
        item.person = person;
      }
      state[list].unshift(item);
      if (list in state.activeData) {
        state.activeData[list].unshift(item);
      }
    },
    // ============  PEOPLE  ============
    /**
     * changes the active person to display data for through the app
     * @param  {object} action a person object
     */
    setActivePerson: (state, action) => {
      state.activePerson = action.payload;

      state.activeData.foodRecords = state.foodRecords.filter(
        (record) => record.person.id === state.activePerson.id
      );
      state.activeData.filteredFoodRecords = state.activeData.foodRecords;

      state.activeData.bites = state.bites.filter(
        (bite) => bite.foodRecord.person.id === state.activePerson.id
      );
      state.activeData.filteredBites = state.activeData.bites;
    },
    // ============  SORT & FILTER  ============
    /**
     * reorders the state foods list
     * @param  {string} key the key to sort the objects by
     * @param  {string} direction ascending or descending sort order
     */
    sortFoods: (state, action) => {
      const key = action.payload.key.toLowerCase();
      const direction = action.payload.direction;

      switch (key) {
        case "food":
          if (direction === "asc") {
            state.activeData.bites = _.sortBy(
              state.activeData.bites,
              (bite) => bite.foodRecord.food.name
            );
          }

          if (direction === "desc") {
            state.activeData.bites = _.sortBy(
              state.activeData.bites,
              (bite) => bite.foodRecord.food.name
            ).reverse();
          }
          break;
        default:
          if (direction === "asc") {
            state.foods = _.sortBy(state.foods, key);
            state.activeData.bites = _.sortBy(state.activeData.bites, key);
          }

          if (direction === "desc") {
            state.foods = _.sortBy(state.foods, key).reverse();
            state.activeData.bites = _.sortBy(
              state.activeData.bites,
              key
            ).reverse();
          }
          break;
      }
    },
    /**
     * Used in dashboard view to filter charts with the colour/flavour/texture options
     * @param  {string} category category which is being filtered
     * @param  {string} values the values to display
     */
    filterRecords: (state, action) => {
      // reset list
      state.activeData.filteredFoodRecords = state.activeData.foodRecords;
      state.activeData.filteredBites = state.activeData.bites;

      const category = action.payload.category;
      const values = action.payload.selected;
      state.activeFilters[category] = values;

      for (const [key, value] of Object.entries(state.activeFilters)) {
        if (value.length) {
          state.activeData.filteredFoodRecords =
            state.activeData.filteredFoodRecords.filter((record) => {
              return value.some((v) =>
                record.food[key].toLowerCase().includes(v)
              );
            });
          state.activeData.filteredBites =
            state.activeData.filteredBites.filter((bite) => {
              return value.some((v) =>
                bite.foodRecord.food[key].toLowerCase().includes(v)
              );
            });
        }
      }
    },
    resetFilters: (state) => {
      state.activeData.filteredFoodRecords = state.activeData.foodRecords;
      state.activeData.filteredBites = state.activeData.bites;
      state.activeFilters = { colour: [], flavour: [], texture: [] };
    },
    // ============  CATEGORIES  ============
    /**
     * Used in food categories view to change category in state when object is recategorised
     * @param  {string} id The id of the record to change
     * @param  {string} category The new category
     */
    updateCategory: (state, action) => {
      const { id, category } = action.payload;
      state.activeData.foodRecords.find((obj) => obj.id === id).category =
        category;
    },
  },
});

export const {
  setDataState,
  editStateItem,
  addStateItem,
  removeStateItem,
  setActivePerson,
  sortFoods,
  filterRecords,
  resetFilters,
  updateCategory,
} = slice.actions;

export default slice.reducer;
