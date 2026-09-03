import FetchMemberById from "../helpers/fetchMembersById";
import MemberDetailsTable from "./tables/memberDetailsTable";

export default function GetMemberTableById({id}: {id: number}) {
    let content;
    
    const memberData = FetchMemberById(id);

    if (!memberData) {
        content = <div>Data kunne ikke hentes</div>
    }
    else {
        content = <MemberDetailsTable member={memberData} />
    }

    return ( 
        <div>
            {content}            
        </div>
    )
}