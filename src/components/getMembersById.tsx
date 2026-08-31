import { useFetchMemberByIdQuery } from "../store";
import MemberDetailsTable from "./memberDetailsTable";

export default function GetMembersById({id}: {id: number}) {
    let content;
    
    const {data, isFetching, error} = useFetchMemberByIdQuery(id); // check when internet is available
    if (!id) {
        content = <div>Medlem ikke fundet</div>
    } else if (!data) {
        content = <div>Data kunne ikke læses</div>
    } else if (isFetching) {
        content = <div>Indlæser...</div>
    } else if (error) {
        content = <div>Problem med at hente medlem</div>
        console.log(error);
    } else {
        content = <MemberDetailsTable member={data} />
    }

    return ( 
        <div>
            {content}            
        </div>
    )
}