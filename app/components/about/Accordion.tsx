"use client";
import React from "react";
import {Accordion} from "flowbite-react";

function Accordions() {
    return (
        <div className="mx-5 my-5 sm:mx-10 md:mx-16 lg:mx-32">
            <h3 className="align-middle justify-center  text-2xl font-bold leading-relaxed text-center text-slate-400 my-5 sm:text-3xl">
                FAQs
            </h3>
            <Accordion alwaysOpen={true}>
                <Accordion.Panel>
                    <Accordion.Title>What is StayCurios?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            StayCurios is a startup platform designed to help businesses showcase their portfolios
                            to potential investors and partners. Our services include the creation of a digital
                            portfolio, display of your portfolio on our platform, and the opportunity to connect
                            with potential investors and partners.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>How can I get started with StayCurios?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Getting started with StayCurios is easy. Simply sign up for an account on our platform
                            and follow the instructions provided to upload your portfolio. Our team will be on
                            hand to assist you every step of the way.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>How can I create a portfolio on StayCurios?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Creating a portfolio on StayCurios is easy. Simply sign up for an account on our
                            platform and follow the instructions provided to upload your portfolio. Our team will
                            review your portfolio and work with you to ensure that it is presented in the best
                            possible light to potential investors and partners.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>How does StayCurios help me to improve my portfolio?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            StayCurios provides you with detailed analytics and insights into how your portfolio
                            is performing on our platform. We use this data to provide you with recommendations on
                            how you can improve your portfolio and make it more attractive to potential investors
                            and partners.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        How does StayCurios ensure the security of my portfolio?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            At StayCurios, we take the security of your portfolio very seriously. We use the
                            latest encryption technologies to ensure that your portfolio is safe and secure at all
                            times. We also provide two-factor authentication and other security features to
                            protect your account.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Can I connect with potential investors and partners through StayCurios?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Yes, StayCurios provides you with the opportunity to connect with potential investors
                            and partners through our platform. Once your portfolio is uploaded, our team will work
                            with you to identify potential investors and partners who may be interested in your
                            business.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>How much does it cost to use StayCurios?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            StayCurios offers a range of pricing plans to suit businesses of all sizes. Our
                            pricing plans are designed to be flexible and affordable, and we offer a free trial so
                            that you can try our platform before you buy, but dont worry website still free.
                            Contact us for more information on our pricing plans.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
}

export default Accordions;
