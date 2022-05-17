import dynamic from "next/dynamic";
import Header from "../components/Home/Header/Header";
import { Meta } from "../components/styles/Meta";

const HomeNavbar = dynamic(() =>
   import("../components/statics/Navbars/NavHome")
);

export default function Home() {
   return (
      <>
         <Meta title="Home" />
         <HomeNavbar
            nav={["ویژگی ها", "قیمت ها", "وبلاگ", "سوالات متداول", "خبرنامه"]}
            type="home"
         />
         <Header />
      </>
   );
}
