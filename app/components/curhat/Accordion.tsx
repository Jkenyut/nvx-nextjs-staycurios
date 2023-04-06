"use client";
import React from "react";
import { Accordion } from "flowbite-react";
function Accordions() {
  return (
    <div className="mx-5 my-5 sm:mx-10 md:mx-16 lg:mx-32">
      <h3 className=" align-middle justify-center  text-2xl font-bold leading-relaxed text-center text-slate-400 my-5 sm:text-3xl ">
        FAQs
      </h3>
      <Accordion alwaysOpen={true}>
        <Accordion.Panel>
          <Accordion.Title>Why Use Sharing Session on StayCurios?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              StayCurios is a platform that connects individuals with professional counselors for
              online counseling services. We offer a safe and confidential space for individuals to
              discuss their problems and receive guidance and support.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Who are the counselors on StayCurios?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Our counselors are licensed professionals with experience in counseling individuals
              for various issues such as stress, anxiety, depression, relationships, and more. We
              carefully vet our counselors to ensure that they have the necessary qualifications and
              expertise to provide effective counseling services.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>How does StayCurios work?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              To get started, simply create an account on our platform and browse through our list
              of counselors. You can then choose a counselor that suits your needs and schedule a
              session with them. Our counseling sessions are conducted through video, phone, or
              chat, depending on your preference.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Is StayCurios confidential?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Yes, confidentiality is our top priority. All our counseling sessions are conducted in
              a secure and private environment, and your personal information is kept confidential.
              We adhere to the highest standards of privacy and security to ensure that your
              information is safe.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>How much does counseling on StayCurios cost?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Our counseling services are competitively priced, with rates starting from as low as
              $50 per session. We offer flexible payment options to make our services accessible to
              everyone.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Is counseling on StayCurios effective?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Yes, our counseling services are designed to be effective and efficient. Our
              counselors are trained to provide evidence-based therapies that have been proven to be
              effective in treating various mental health issues. We also offer personalized support
              and guidance to help individuals achieve their goals and improve their overall
              well-being.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}

export default Accordions;
