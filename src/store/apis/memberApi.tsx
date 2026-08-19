import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type Member } from "../../interfaces/member";

const memberApi = createApi({
    reducerPath: 'Member',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5093/api/'
    }),
    endpoints(builder) {
        return {
            fetchMembers: builder.query<Member[], void>({
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
