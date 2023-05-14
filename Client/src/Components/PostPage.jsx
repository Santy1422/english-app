import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export const PostPage = () => {
const profile = useSelector(state => state.profile)
const article = useParams()
console.log(article)
    return(
<>
</>
    )

}