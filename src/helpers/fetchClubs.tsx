import { useFetchClubsQuery } from "../store";
import { type Club } from "../interfaces/club";

export default function FetchClubs(): Club[] | null {
    const {data, error, isFetching} = useFetchClubsQuery();
    console.log(data, error, isFetching);

    if (!data) {
        console.log("Error, data could not be fetched");
        return null;
    }
    else {
        return data;
    }  
} 