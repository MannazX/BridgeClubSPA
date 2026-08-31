import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type Member } from "../../interfaces/member";
import { type GetParams } from "../../interfaces/params";

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
            }),
            fetchMemberByName: builder.query<Member[], GetParams>({
                query: ({name, sorting}) => {
                    return {
                        url: 'Member',
                        params: {
                            searchName: name,
                            sortBy: sorting,
                        },
                        method: 'GET',
                    };
                },
            }),
            fetchMemberById: builder.query<Member, number | undefined>({
                query: (id) => {
                    return {
                        url: `Member/${id}`,
                        method: 'GET',
                    };
                },  
            }),
        }
    }
});

export const { useFetchMembersQuery, useFetchMemberByNameQuery, useFetchMemberByIdQuery } = memberApi;
export { memberApi };
