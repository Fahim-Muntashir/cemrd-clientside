import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api`,
    }),
    tagTypes: ["all-quiz", "all-module"],

    endpoints: () => ({}),
});