import dynamic from "next/dynamic";
import Header from "../components/Home/Header/Header";
// import Section from "../components/Home/Section/Section";
import { Meta } from "../components/styles/Meta";
// import Properties from "../components/Home/Properties/Properties";
// import NavHome from "../components/statics/Navbars/NavHome";
// import Plans from "../components/Home/Plans/Plans";
import Accordion from "../components/Home/Accordion/Accordion";
// import Blog from "../components/Home/Blog/Blog";
import Questions from "../components/Home/Questions/Questions";
import Footer from "../components/Home/Footer/Footer";
import Input from "../components/styles/Input/Input";
import NewsLetters from "../components/NewsLetters/NewsLetters";

const NavHome = dynamic(() => import("../components/statics/Navbars/NavHome"));
const Properties = dynamic(() =>
   import("../components/Home/Properties/Properties")
);
const Section = dynamic(() => import("../components/Home/Section/Section"));
const Plans = dynamic(() => import("../components/Home/Plans/Plans"));
const Blog = dynamic(() => import("../components/Home/Blog/Blog"));

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
         <Questions />
         <NewsLetters />
         <Footer />
      </>
   );
}
