import { useFetchMemberByIdQuery } from "../store";
import { type Member } from "../interfaces/member";

export default function FetchMemberById(id: number): Member | null {
    const {data, isFetching, error} = useFetchMemberByIdQuery(id);
    console.log(data, isFetching, error);

    if (!data) {
        console.log("Error, data could not be fetched");
        return null;
    }
    else {
        return data;
    }
}