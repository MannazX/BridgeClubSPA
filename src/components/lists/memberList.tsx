import FetchMembers from "../../helpers/fetchMembers";
import MemberTable from "../tables/memberTable";
import SearchSortedMembers from "../forms/searchSortByMemberNames";
import GetMemberTableById from "../getMemberTableById";
import { useState } from "react";


export default function MemberList() {
   
    const [memberID, setMemberID] = useState<number>(1);
    const handleSelectId = (id: number) => {
        setMemberID(id);
        console.log(`${memberID} selected`);
    }

    const memberData = FetchMembers();
    let content;
    
    if (!memberData) {
        content = <div>Ingen spillere kunne hentes</div>
    }
    else {
        content = <>
            <MemberTable members={memberData} selectedId={handleSelectId} />
            <GetMemberTableById id={memberID} />
        </>
    }
    return (
        <div>
            <h2 className="text-center">Spillere</h2>
            <br></br>
            <SearchSortedMembers /><br></br>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '200px', width: '100%'}}>{content}</div>
        </div>
    )
}