import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type MainClub } from "../../interfaces/mainClub";

const mainClubApi = createApi({
    reducerPath: 'MainClubApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5093/api/'
    }),
    endpoints(builder) {
        return {
            fetchMainClub: builder.query<MainClub, void>({
                query: () => {
                    return {
                        url: 'MainClub',
                        method: 'GET',
                    };
                },
            }),
        }
    }
})

export const { useFetchMainClubQuery } = mainClubApi;
export { mainClubApi };