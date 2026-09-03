import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type MemberClub } from "../../interfaces/memberClub";

const memberClubApi = createApi({
    reducerPath: 'MemberClub',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5093/api/'
    }),
    endpoints(builder) {
        return {
            fetchMemberClubs: builder.query<MemberClub[], void>({
                query: () => {
                    return {
                        url: 'MemberClub',
                        method: 'GET',
                    };
                },
            }),
            fetchMemberClubByClubId: builder.query<MemberClub[], number | undefined>({
                query: (clubId) => {
                    return {
                        url: `MemberClub/${clubId}`,
                        method: 'GET',
                    }
                }
            })
        }
    }
});

export const { useFetchMemberClubsQuery, useFetchMemberClubByClubIdQuery } = memberClubApi;
export { memberClubApi };