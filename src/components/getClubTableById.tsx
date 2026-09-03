import FetchClubById from "../helpers/fetchClubsById";
import ClubDetailsTable from "./tables/clubDetailsTable";

export default function GetClubTableById({id}: {id: number}) {
    let content;

    const clubData = FetchClubById(id);

    if (!clubData) {
        content = <div>Data kunne ikke hentes</div>
    
    } else {
        content = <ClubDetailsTable club={clubData} />
    }

    return (
        <div>
            {content}
        </div>
    )
} 