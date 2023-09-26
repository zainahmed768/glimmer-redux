import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { BASE_URL } from "../../utils";

const authApi = createApi({
	reducerPath: "authApi",
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (builder) => {
		return {
			loginContent: builder.mutation({
				query: (loginData) => {
					return {
						url: "auth/login",
						method: "Post",
						body: loginData,
					};
				},
			}),
		};
	},
});

export const { useLoginContentMutation } = authApi;
export default authApi;
