import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactSlice } from "./contactSlice";
import { filterSlice } from "./filterSlice";

const persistConfig = {
  key: "contacts",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactSlice);

export const store = configureStore({
  reducer: {
    contact: persistedReducer,
    filter: filterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
