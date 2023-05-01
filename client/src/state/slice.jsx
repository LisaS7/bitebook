import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  foods: [],
  foodRecords: [],
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
      state.foodRecords = action.payload.foodRecords;
      state.filteredFoods = state.foods; // initalise with all foods for dashboard charts
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
      if (list === "bites") {
        state.bites.unshift(item);
      }
      state[list].unshift(item);
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
  editStateItem,
  addStateItem,
  removeStateItem,
  editPerson,
  removePerson,
  addPerson,
  sortFoods,
  filterFoods,
  resetFilters,
} = slice.actions;

export default slice.reducer;
