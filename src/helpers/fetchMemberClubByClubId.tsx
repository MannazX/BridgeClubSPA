import { useFetchMemberClubByClubIdQuery } from "../store";
import { type MemberClub } from "../interfaces/memberClub";
export default function FetchMemberClubByClubId(id: number): MemberClub[] | null {
    const {data, isFetching, error} = useFetchMemberClubByClubIdQuery(id);
    console.log(data, isFetching, error);

    if (!data) {
        console.log("Data could not be fetched");
        return null;
    }
    else {
        return data;
    }
}