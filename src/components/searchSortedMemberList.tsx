import { useFetchMemberByNameQuery, type RootState } from "../store";
import { useSelector } from "react-redux";
import type { GetParams } from "../interfaces/params";
import MemberDetails from "./memberDetails";

function SearchSortedMemberList() {
    const searchMember: GetParams = useSelector((state: RootState) => ({
        name: state.searchSortedMember.searchName,
        sorting: state.searchSortedMember.sortBy
    }));

    const {data, error, isFetching} = useFetchMemberByNameQuery(searchMember);

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
            content = processedData?.map((member) => {
                return <MemberDetails key={member.membeR_ID} member={member} />
            })
        }
    }

    return (
        <div>
            <h2 className="text-start">Søgte Spillere</h2>
            <div>{content}</div>
        </div>
    )
}

export default SearchSortedMemberList;