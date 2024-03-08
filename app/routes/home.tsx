import {Outlet} from "@remix-run/react";

export default function Home(){
    return (
        <div>
            Home
            <Outlet />
        </div>
    )
}