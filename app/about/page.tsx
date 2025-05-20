import React from "react";
import Accordions from "../components/about/Accordion";

export const metadata = {
    title: "About",
    openGraph: {
        title: "About",
    },
};

function page() {
    return (
        <div>
            <Accordions/>
        </div>
    );
}

export default page;
