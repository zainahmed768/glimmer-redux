import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./services/productService";
import { setupListeners } from "@reduxjs/toolkit/query";
import authApi from "./services/authApi";

const store = configureStore({
	reducer: {
		[productApi.reducerPath]: productApi.reducer,
		[authApi.reducerPath]: authApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([productApi.middleware, authApi.middleware]),
});

setupListeners(store.dispatch);

export default store;
