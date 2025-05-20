import React from "react";
import Navbars from "./Navbars";
import Footers from "./Footers";
import Breadcrumbs from "./Breadcrumbs";

export default function Header({children}: { children: React.ReactNode }) {
    return (
        <main>
            <Navbars/>
            <Breadcrumbs/>
            <div className=" bg-gray-200 from-gray-200 to-gray-100 bg-gradient-to-b px-4 pt-2 rounded-b-md font-light">
                <p className="text-center text-md font-medium text-slate-700 ">
                    You are using the latest beta version
                </p>
            </div>
            {children}
            <Footers/>
        </main>
    );
}
