"use client";
import React, {useState} from "react";
import {Footer, Navbar} from "flowbite-react";
import {BsFacebook, BsGithub, BsInstagram, BsTwitter} from "react-icons/bs";
import Image from "next/image";
import {ModalPolicy, ModalTerms} from "./ModalBasic";
import {Button as ButtonAntd} from "antd";
import Donate from "./Donate";

function Footers() {
    const [modalTermsIsOpen, setModalTermsIsOpen] = useState<boolean>(false);
    const [modalPolicyIsOpen, setModalPolicyIsOpen] = useState<boolean>(false);
    const [showDonate, setShowDonate] = useState<boolean>(false);

    function openModalTerms() {
        if (modalTermsIsOpen) {
            setModalTermsIsOpen(false);
            setTimeout(() => {
                setModalTermsIsOpen(true);
            }, 100);
        } else {
            setModalTermsIsOpen(true);
        }
    }

    function openModalPolicy() {
        if (modalPolicyIsOpen) {
            setModalPolicyIsOpen(false);
            setTimeout(() => {
                setModalPolicyIsOpen(true);
            }, 100);
        } else {
            setModalPolicyIsOpen(true);
        }
    }

    function openDonate() {
        if (showDonate) {
            setShowDonate(false);
            setTimeout(() => {
                setShowDonate(true);
            }, 100);
        } else {
            setShowDonate(true);
        }
    }

    return (
        <Footer container={true}>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
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
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="about"/>
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#">StayCurios</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us"/>
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="https://github.com/Jkenyut/">Github</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal"/>
                            <Footer.LinkGroup col={true}>
                                <Footer.Link href="#" onClick={openModalPolicy}>
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link href="#" onClick={openModalTerms}>
                                    Terms & Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider/>
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="StayCurios™" year={2023}/>
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <ButtonAntd
                            size="small"
                            shape="round"
                            type="primary"
                            className="bg-[#1677ff]"
                            onClick={openDonate}
                        >
                            Donate
                        </ButtonAntd>
                        <Footer.Icon href="#" icon={BsFacebook}/>
                        <Footer.Icon href="#" icon={BsInstagram}/>
                        <Footer.Icon href="#" icon={BsTwitter}/>
                        <Footer.Icon href="#" icon={BsGithub}/>
                    </div>
                </div>
            </div>
            {modalTermsIsOpen && <ModalTerms/>}
            {modalPolicyIsOpen && <ModalPolicy/>}
            {showDonate && <Donate/>}
        </Footer>
    );
}

export default Footers;
