import { useFetchMemberClubByClubIdQuery } from "../store";

export default function FetchMemberClubByClubId(id: number) {
    const {data, isFetching, error} = useFetchMemberClubByClubIdQuery(id);
    console.log(data, isFetching, error);

    if (!data) {
        console.log("Data could not be fetched");
        return null;
    }
    else if (isFetching) {
        return isFetching;
    }
    else {
        return data;
    }
}