import React from "react";
import Accordions from "../components/curhat/Accordion";
import MyForm from "./Form";
import Introduction from "./Introduction";

function page() {
  return (
    <div>
      <Introduction />
      <MyForm />
      {/* <ContactForm /> */}
      <Accordions />
    </div>
  );
}

export default page;
