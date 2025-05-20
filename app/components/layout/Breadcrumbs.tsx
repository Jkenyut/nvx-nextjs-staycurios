"use client";
import React from "react";
import {Breadcrumb} from "flowbite-react";
import {HiHome} from "react-icons/hi2";
import {usePathname} from "next/navigation";

function Breadcrumbs() {
    const pathname = usePathname();

    let url = "/";

    return (
        <Breadcrumb
            aria-label="Solid background breadcrumb example"
            className="bg-gray-50 py-3 px-5 dark:bg-gray-900"
        >
            <Breadcrumb.Item href="/" icon={HiHome}>
                Home
            </Breadcrumb.Item>
            {pathname.split("/").map((path: string) => {
                let modul;
                if (path === pathname.split("/").at(-1) && path !== "") {
                    url += path + "/";
                    // eslint-disable-next-line react/jsx-key
                    modul = <Breadcrumb.Item key={path}>{path}</Breadcrumb.Item>;
                } else if (path !== "") {
                    url += path + "/";
                    // eslint-disable-next-line react/jsx-key
                    modul = (
                        <Breadcrumb.Item href={url} key={path}>
                            {path}
                        </Breadcrumb.Item>
                    );
                }
                return modul;
            })}
        </Breadcrumb>
    );
}

export default Breadcrumbs;
