import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetProfile } from "../redux/actions";
import axios from "axios";

export const usePagination = () =>{

    const [paginas, setPaginas] = useState(1)
    const profile = useSelector((state) => state.profile)

    return{
        paginas, setPaginas, profile
    }
}