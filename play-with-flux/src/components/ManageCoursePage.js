import React from "react";
import { Prompt } from "react-router";

const ManageCoursePage=(props)=>{

    return (

        <>
        <h2>Manage Course</h2>
        <Prompt when={true} message="Sayfadan ayrılmak istediğinden emin misin?"></Prompt>
        {props.match.params.slug}
        </>
    )

}

export default ManageCoursePage;