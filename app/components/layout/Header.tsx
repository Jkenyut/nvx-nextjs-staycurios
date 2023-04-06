import React from "react";
import Navbars from "./Navbars";
import Footers from "./Footers";
import Breadcrumbs from "./Breadcrumbs";
export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbars />
      <Breadcrumbs />
      {children}
      <Footers />
    </main>
  );
}
