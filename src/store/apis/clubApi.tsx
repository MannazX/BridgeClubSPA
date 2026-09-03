import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type Club } from "../../interfaces/club";

const clubApi = createApi({
    reducerPath: 'Club',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5093/api/'
    }),
    endpoints(builder) {
        return {
            fetchClubs: builder.query<Club[], void>({
                query: () => {
                    return {
                        url: 'Club',
                        method: 'GET',
                    };
                },
            }),
            fetchClubById: builder.query<Club, number | undefined>({
                query: (id) => {
                    return {
                        url: `Club/${id}`,
                        method: 'GET',
                    };
                },
            }),
        }
    }
})

export const { useFetchClubsQuery, useFetchClubByIdQuery } = clubApi;
export { clubApi };