import type { Member } from "../interfaces/member";
import { useFetchMembersQuery } from "../store";

export default function FetchMembers(): Member[] | null {
    const {data, error, isFetching} = useFetchMembersQuery();
    console.log(data, error, isFetching);

    if (!data) {
        console.log("Error, data could not be fetched");
        return null;
    }
    else {
        return data;
    }  
} 