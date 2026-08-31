import React from "react";
import { useFetchClubsQuery } from "../store";
import ClubTable from "./clubTable";

export default function ClubList() {
    const {data, isFetching, error} = useFetchClubsQuery();

    let content;
    if (isFetching) {
        content = <div>Indlæser data...</div>
    } else if (error) {
        content = <div>Fejl ved at hente klubber</div>
    } else {
        content = <>
            <ClubTable clubs={data} />
        </>
    }

    return (
        <div>
            <h2 className="text-center">Klubber</h2>
            <div>{content}</div>
        </div>
    )
}