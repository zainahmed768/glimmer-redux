import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils";

export const productApi = createApi({
	reducerPath: "productApi",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: (build) => ({
		getProduct: build.query({
			query: () => "products",
		}),
	}),
});

export const { useGetProductQuery } = productApi;
