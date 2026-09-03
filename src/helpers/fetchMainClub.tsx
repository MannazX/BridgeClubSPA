import { useFetchMainClubQuery } from "../store";
import { type MainClub } from "../interfaces/mainClub";

export default function FetchMainClub(): MainClub | null{
    const {data, isFetching, error} = useFetchMainClubQuery();
    console.log(data, isFetching, error);

    if (!data) {
        console.log("No data fetched");
        return null;
    }
    else {
        return data;
    }
}