import { useState } from "react";
import FetchClubs from "../../helpers/fetchClubs";
import ClubTable from "../tables/clubTable";
import GetClubTableById from "../getClubTableById";
import { useNavigate } from "react-router-dom";

export default function ClubList() {
    const [clubId, setClubId] = useState<number>(1)
    const navigate = useNavigate();
    const handleSelectId = (id: number) => {
        setClubId(id);
        console.log(`${clubId} selected`);
    }

    const handleNavigateMembersInClub = (id: number) => {
        navigate(`/klubSpillere/${id}`);
    }

    let content;
    const clubData = FetchClubs();

    if (!clubData) {
        content = <div>Ingen klubber kunne hentes</div>
    }
    else if (typeof clubData === "boolean") {
        content = <div>Henter klubber</div>
    }
    else {
        content = <>
            <ClubTable clubs={clubData} selectedId={handleSelectId} navigateToClubMembers={handleNavigateMembersInClub}/>
            <GetClubTableById id={clubId} />
        </>
    }

    return (
        <div>
            <h2 className="text-center">Kluboversigt</h2>
            <br></br><br></br>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '200px', width: '100%'}}>{content}</div>
        </div>
    )
}