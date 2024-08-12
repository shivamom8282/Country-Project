import { useContext } from "react";
import { Themecontext } from "../contexts/themecontexts";

export function usetheme()
{
    const[isdark,setdark]=useContext(Themecontext)

    return [isdark,setdark]
}