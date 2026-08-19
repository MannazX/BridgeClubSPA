import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const memberApi = createApi({
    reducerPath: 'Member',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5093/api/'
    }),
    endpoints(builder) {
        return {
            fetchMembers: builder.query({
                query: () => {
                    return {
                        url: 'Member',
                        method: 'GET',
                    };
                },
            })
        }
    }
});

export const { useFetchMembersQuery } = memberApi;
export { memberApi };
