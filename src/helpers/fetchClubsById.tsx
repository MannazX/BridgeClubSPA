import { useFetchClubByIdQuery } from "../store";

export default function FetchClubById(id: number) {
    const {data, isFetching, error} = useFetchClubByIdQuery(id);
    console.log(data, isFetching, error);

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