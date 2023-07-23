import { createSlice } from '@reduxjs/toolkit';


export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});


export const { add, remove } = phonebookSlice.actions;

// import { configureStore } from '@reduxjs/toolkit';

// import { phonebookSlice } from './userSlice';

// export const store = configureStore({
//   reducer: {
//     phonebook: phonebookSlice.reducer,
//   },
// });