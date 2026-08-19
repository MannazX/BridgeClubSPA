import React from "react";
import { useFetchMembersQuery } from "../store";

function MemberDetails() {
    const {data, error, isFetching} = useFetchMembersQuery();
    console.log(data, error, isFetching);

    let content;
    if (isFetching) {
        content = <div>Loading...</div>;
    }
    else if (error) {
        content = <div>Error loading the members</div>;
    }
    else {
        content = data.map((member) => {
            return <p>{member.name}</p>
        })
    }
    return (
        <div>{content}</div>
    )
}

export default MemberDetails;