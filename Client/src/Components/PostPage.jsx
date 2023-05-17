import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Panel } from "./Panel";

export const PostPage = () => {
    const { id } = useParams();
    const profile = useSelector(state => state.profile);
    
    let articulo = profile?.teory?.filter((ele) => ele?._id === id);

    return(
<>
<Panel articulo = { articulo }/>


</>
    )

}