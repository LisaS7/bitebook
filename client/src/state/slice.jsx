import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  foods: [],
  foodRecords: [],
  bites: [],
  people: [],
  categories: [],
  groups: [],
  activePerson: {},
  activeData: { foodRecords: [], bites: [] },
  activeFilters: { colour: [], flavour: [], texture: [] },
  filteredRecords: [],
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
      state.filteredRecords = state.foodRecords; // initalise with all records for dashboard charts
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

      state.activeData.bites = state.bites.filter(
        (bite) => bite.foodRecord.person.id === state.activePerson.id
      );
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
            state.bites = state.bites.sort((a, b) =>
              a.foodRecord.food.name?.localeCompare(
                b.foodRecord.food.name?.toString(),
                "en",
                { numeric: true }
              )
            );
          }

          if (direction === "desc") {
            state.bites = state.bites.sort((a, b) =>
              b.foodRecord.food.name?.localeCompare(
                a.foodRecord.food.name?.toString(),
                "en",
                { numeric: true }
              )
            );
          }
          break;
        case "rating":
          if (direction === "asc") {
            state.bites = state.bites.sort((a, b) => b.rating - a.rating);
          }

          if (direction === "desc") {
            state.bites = state.bites.sort((a, b) => a.rating - b.rating);
          }
          break;
        default:
          if (direction === "asc") {
            state.foods = state.foods.sort((a, b) =>
              a[key]?.localeCompare(b[key]?.toString(), "en", { numeric: true })
            );
            state.bites = state.bites.sort((a, b) =>
              a[key]?.localeCompare(b[key]?.toString(), "en", { numeric: true })
            );
          }

          if (direction === "desc") {
            state.foods = state.foods.sort((a, b) =>
              b[key]?.localeCompare(a[key]?.toString(), "en", { numeric: true })
            );
            state.bites = state.bites.sort((a, b) =>
              b[key]?.localeCompare(a[key]?.toString(), "en", { numeric: true })
            );
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
      state.filteredRecords = state.foodRecords; // reset list

      const category = action.payload.category;
      const values = action.payload.selected;
      state.activeFilters[category] = values;

      for (const [key, value] of Object.entries(state.activeFilters)) {
        if (value.length) {
          state.filteredRecords = state.filteredRecords.filter((record) => {
            return value.some((v) =>
              record.food[key].toLowerCase().includes(v)
            );
          });
        }
      }
    },
    resetFilters: (state) => {
      state.filteredRecords = state.foodRecords;
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
      state.foodRecords.find((obj) => obj.id === id).category = category;
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
