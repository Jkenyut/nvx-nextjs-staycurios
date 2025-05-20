"use client";
import React from "react";
import {Navbar} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import "flowbite";

function Navbars() {
    // const pathname = usePathname();

    return (
        <Navbar fluid={true} rounded={true}>
            <Navbar.Brand href="/">
                <Image
                    src="/Logo.png"
                    className="mr-3 h-6 sm:h-9 object-cover"
                    alt="staycurios Logo"
                    width={50}
                    height={50}
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          StayCurios
        </span>
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <MenuNavigation/>
            </Navbar.Collapse>
        </Navbar>
    );
}

function MenuNavigation() {
    const pathname = usePathname();
    const menu = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "Project",
            href: "/project",
        },
        {
            name: "Certificate",
            href: "/certificate",
        },
        {
            name: "About",
            href: "/about",
        },
        {
            name: "Curhat",
            href: "/curhat",
        },
    ];
    return (
        <div className=" w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {menu.map((link: any) => {
                    const isActive = link.href === pathname;

                    return (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className={
                                    isActive
                                        ? `block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white`
                                        : "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                }
                            >
                                {link.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Navbars;
