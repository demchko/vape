import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/custom/Header/Header";
import About from "~/components/custom/About/About";
import Advantages from "~/components/custom/Advantages/Advantages";
import NewStuff from "~/components/custom/NewStuff/NewStuff";
import Faq from "~/components/custom/FAQ/Faq";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Header />
      <About />
      <Advantages />
      <NewStuff />
      <Faq />
    </div>
  );
}
