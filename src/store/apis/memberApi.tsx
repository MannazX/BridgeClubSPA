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
            }),
            fetchMemberByFirstName: builder.query<Member[], void>({
                query: (firstname) => {
                    return {
                        url: 'Member',
                        params: {
                            firstName: firstname, 
                            sortBy: 'firstName',
                        },
                        method: 'GET',
                    };
                },
            }),
            fetchMemberByLastName: builder.query<Member[], void>({
                query: (lastname) => {
                    return {
                        url: 'Member',
                        params: {
                            lastName: lastname,
                            sortBy: 'firstName',
                        },
                        method: 'GET',
                    }
                }
            })
        }
    }
});

export const { useFetchMembersQuery, useFetchMemberByFirstNameQuery, useLazyFetchMemberByLastNameQuery } = memberApi;
export { memberApi };
