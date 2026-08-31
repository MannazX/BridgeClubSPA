import { useFetchMemberByNameQuery, type RootState } from "../store";
import { useSelector } from "react-redux";
import type { GetParams } from "../interfaces/params";
import MemberDetails from "./memberTable";
import { useState } from "react";
import GetMembersById from "./getMembersById";
import SearchSortedMembers from "./searchSortByMemberNames";

export default function SearchSortedMemberList() {
    const searchMember: GetParams = useSelector((state: RootState) => ({
        name: state.searchSortedMember.searchName,
        sorting: state.searchSortedMember.sortBy
    }));

    const {data, error, isFetching} = useFetchMemberByNameQuery(searchMember);

    const [memberID, setMemberID] = useState<number>(1);
    const handleSelectId = (id: number) => {
        setMemberID(id);
        console.log(`${memberID} selected`);
    }

    let content;
    if (isFetching) {
        content = <div>Loading...</div>
    } else if (error) {
        content = <div>Error loading Members.</div>
    } else {
        const memberName = searchMember.name.trim();
        const processedData = data?.filter((member) => member.name?.includes(memberName.charAt(0).toUpperCase() + memberName.slice(1)))
        .sort((firstOption, secondOption) => {
            const firstName = searchMember.sorting === 'firsT_NAME' ? firstOption.firsT_NAME : firstOption.lasT_NAME;
            const secondName = searchMember.sorting === 'firsT_NAME' ? secondOption.firsT_NAME : secondOption.lasT_NAME;

            return (firstName ?? '').localeCompare(secondName ?? '', 'da');
        })
        
        if (!processedData) {
            content = <div>Did not process right.</div>
        } else {
            content = <>
                <MemberDetails members={processedData} selectedId={handleSelectId}/>
                <GetMembersById id={memberID} />
            </>
        }
    }

    return (
        <div>
            <h2 className="text-center">Søgte Spillere</h2>
            <SearchSortedMembers /><br></br>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '200px', width: '100%'}}>{content}</div>
        </div>
    )
}