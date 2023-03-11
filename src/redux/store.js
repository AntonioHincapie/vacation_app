import { configureStore } from "@reduxjs/toolkit";
import { vacationsReducer } from "./vacations/vacations";

const store = configureStore({
  reducer: {
    vacations: vacationsReducer,
  },
});

export default store;
