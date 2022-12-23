import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

import type { RootState } from "../store";

const contactAdapter = createEntityAdapter({
  selectId: (contact: any) => contact._id,
});

export const contactSlice = createSlice({
  name: "contact",
  initialState: contactAdapter.getInitialState(),
  reducers: {
    setAllContacts(state, action) {
      contactAdapter.setAll(state, action.payload);
    },
    setContact(state, action) {
      contactAdapter.setOne(state, action.payload);
    },
  },
});

export const getState = (rootState: RootState) => rootState.contacts;

export const contactsSelector = contactAdapter.getSelectors(
  (state: RootState) => state.contacts
);

export const { setAllContacts, setContact } = contactSlice.actions;
