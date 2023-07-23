import { configureStore } from '@reduxjs/toolkit';

import { phonebookSlice } from './phonebookSlice';

export const store = configureStore({
  reducer: {
    phonebook: phonebookSlice.reducer,
  },
});

// import { configureStore } from '@reduxjs/toolkit';
// // import { rootReducer } from './reducer';
// import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

// export const increment = createAction('myValue/increment')
// export const decrement = createAction('myValue/decrement');

// const myReducer = createReducer(100, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload,
// });

// export const add = createAction('items/add');
// export const remove = createAction('items/remove');

// const itemsReducer = createReducer([], {
//   [add]: (state, action) => state.push(action.payload),
//   [remove]: (state, action) => state.filter(item => item.id !== action.payload),
// });

// const itemsSlice = createSlice({
//     name: 'items',
//     initialState: [],
//     reducers: {
//         add(state, action) {
//     state.push(action.payload)
//         },
//         remove(state, action) {
//            return state.filter(item => item.id !== action.payload);
//         }
//     }
// })

// const mySlice = createSlice({
//   name: 'myValue',
//   initialState: 100,
//   reducers: {
//     increment(state, action) {
//       return state + action.payload;
//     },
//     decrement(state, action) {
//       return state - action.payload;
//     },
//   },
// });

// export const store = configureStore({
//   reducer: {
//     myValue: mySlice.reducer,
//     items: itemsSlice.reducer,
//   },
// });

// export const { increment, decrement } = mySlice.actions;
// export const { add, remove } = itemsSlice.actions;
