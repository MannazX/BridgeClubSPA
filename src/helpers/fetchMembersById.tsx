import { useFetchMemberByIdQuery } from "../store";

export default function FetchMemberById(id: number) {
    const {data, isFetching, error} = useFetchMemberByIdQuery(id);
    console.log(data, isFetching, error);

    if (!data) {
        console.log("Error, data could not be fetched");
        return null;
    }
    if (isFetching) {
        return isFetching;
    }
    else {
        return data;
    }
}