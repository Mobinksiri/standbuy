// import dynamic from "next/dynamic";
import Header from "../components/Home/Header/Header";
import Section from "../components/Home/Section/Section";
import { Meta } from "../components/styles/Meta";
import Properties from "../components/Home/Properties/Properties";
import NavHome from "../components/statics/Navbars/NavHome";
import Plans from "../components/Home/Plans/Plans";
import Accordion from "../components/Home/Accordion/Accordion";
import Blog from "../components/Home/Blog/Blog";

// const HomeNavbar = dynamic(() =>
//    import("../components/statics/Navbars/NavHome")
// );
// const Properties = dynamic(() =>
//    import("../components/Home/Properties/Properties")
// );

export default function Home() {
   return (
      <>
         <Meta title="Home" />
         <NavHome
            nav={["ویژگی ها", "قیمت ها", "وبلاگ", "سوالات متداول", "خبرنامه"]}
            type="home"
         />
         <Header />
         <Properties />
         <Section />
         <Plans />
         <Accordion />
         <Blog />
      </>
   );
}
