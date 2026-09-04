import { useFetchMainClubQuery } from "../store";

export default function FetchMainClub() {
    const {data, isFetching, error} = useFetchMainClubQuery();
    console.log(data, isFetching, error);

    if (!data) {
        console.log("No data fetched");
        return null;
    }
    else if (isFetching) {
        return isFetching;
    }
    else {
        return data;
    }
}