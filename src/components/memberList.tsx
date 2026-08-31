import React from "react";
import { useFetchMembersQuery } from "../store";
import MemberTable from "./memberTable";
import SearchSortedMembers from "./searchSortByMemberNames";
import GetMembersById from "./getMembersById";
import { useState } from "react";


export default function MemberList() {
    const {data, error, isFetching} = useFetchMembersQuery();
    console.log(data, error, isFetching);
    
    const [memberID, setMemberID] = useState<number>(1);
    const handleSelectId = (id: number) => {
        setMemberID(id);
        console.log(`${memberID} selected`);
    }

    let content;
    
    if (isFetching) {
        content = <div>Indlæser...</div>;
    }
    else if (error) {
        content = <div>Fejl ved at hente medlemmer</div>;
    }
    else {
        content = <>
            <MemberTable members={data ?? null} selectedId={handleSelectId} />
            <GetMembersById id={memberID} />
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