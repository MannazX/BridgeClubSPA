import FetchMemberClubByClubId from "../../helpers/fetchMemberClubByClubId";
import MemberClubTable from "../tables/memberClubTable";
import { useParams } from "react-router-dom";

export default function MemberClubList() {
    const { id } = useParams<string>();
    const clubId = typeof id === "string" ? Number(id) : 0;
    const memberClubData = FetchMemberClubByClubId(clubId);
    
    let content;
    
    if (!memberClubData) {
        content = <div>Kunne ikke hente data</div>
    }
    else if (typeof memberClubData === "boolean") {
        content = <div>Henter klubspiller data</div>
    }
    else {
        content = <>
            <MemberClubTable memberClubs={memberClubData} />
        </>
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '200px', width: '100%'}}>{content}</div>
    )
}