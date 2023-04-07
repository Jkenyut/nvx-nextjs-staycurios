import Image from "next/image";

import Content from "./Content";
export const metadata = {
  title: "Project",
  openGraph: {
    title: "Project",
  },
};
export default function Home() {
  return <Content />;
}
