import React from "react";
import { useFetchMembersQuery } from "../store";
import MemberDetails from "./memberDetails";

export default function MemberList() {
    const {data, error, isFetching} = useFetchMembersQuery();
    console.log(data, error, isFetching);

    let content;
    if (!data) {
        console.log("There is no data");
    }
    
    if (isFetching) {
        content = <div>Loading...</div>;
    }
    else if (error) {
        content = <div>Error loading the members</div>;
    }
    else {
        content = data?.map((member) => (
            <div key={member.membeR_ID}>
                <MemberDetails member={member} />
            </div>
        ));
    }
    return (
        <div>
            <h2 className="text-start">Spiller</h2>
            <div>{content}</div>
        </div>
    )
}