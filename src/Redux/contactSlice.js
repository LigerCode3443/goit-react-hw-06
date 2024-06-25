import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  contacts: [],
};

const slice = createSlice({
  name: "contact",
  initialState,
  selectors: {
    selectContacts: (state) => state.contacts,
  },
  reducers: {
    addContacts: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContacts: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const contactSlice = slice.reducer;
export const { selectContacts } = slice.selectors;
export const { addContacts, deleteContacts } = slice.actions;
