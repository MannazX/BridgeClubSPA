import { useFetchClubByIdQuery } from "../store";
import { type Club } from "../interfaces/club";

export default function FetchClubById(id: number): Club | null {
    const {data, isFetching, error} = useFetchClubByIdQuery(id);
    console.log(data, isFetching, error);

    if (!data) {
        console.log("Error, data could not be fetched");
        return null;
    }
    else {
        return data;
    }
}