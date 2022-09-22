import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
import {
  // persistStore,
//   persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import dragon from "./dragon/dragon-reducer";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  }),
];
// const userPersistor = {
//   key: "user",
//   storage,
//     whitelist: ["token"],
// };

const store = configureStore({
  reducer: {
    dragon: dragon,
    // user: persistReducer(userPersistor, authSlice),
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

// const persistor = persistStore(store);

// const storeContacts = { store, persistor };

export default store;
