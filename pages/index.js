import dynamic from "next/dynamic";
import Header from "../components/Home/Header/Header";
import { Meta } from "../components/styles/Meta";
import Accordion from "../components/Home/Accordion/Accordion";
import Footer from "../components/Home/Footer/Footer";
import NewsLetters from "../components/Home/NewsLetters/NewsLetters";

const NavHome = dynamic(() => import("../components/statics/Navbars/NavHome"));
const Properties = dynamic(() =>
   import("../components/Home/Properties/Properties")
);
const Section = dynamic(() => import("../components/Home/Section/Section"));
const Plans = dynamic(() => import("../components/Home/Plans/Plans"));
const Blog = dynamic(() => import("../components/Home/Blog/Blog"));
const Questions = dynamic(() =>
   import("../components/Home/Questions/Questions")
);

export default function Home() {
   return (
      <>
         <Meta title="Home" />
         <NavHome
            nav={[
               { title: "ویژگی ها", id: "attr" },
               { title: "قیمت ها", id: "prices" },
               { title: "وبلاگ", id: "blog" },
               { title: "سوالات متداول", id: "questions" },
               { title: "خبرنامه", id: "newsletter" },
            ]}
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
