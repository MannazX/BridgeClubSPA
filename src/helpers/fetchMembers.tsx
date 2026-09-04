import { useFetchMembersQuery } from "../store";

export default function FetchMembers() {
    const {data, error, isFetching} = useFetchMembersQuery();
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