import { useFetchClubsQuery } from "../store";

export default function FetchClubs() {
    const {data, error, isFetching} = useFetchClubsQuery();
    console.log(data, error, isFetching);

    if (!data) {
        console.log("Error, data could not be fetched");
        return null;
    }
    else if (isFetching) {
        return isFetching;
    }
    else {
        return data;
    }  
} 