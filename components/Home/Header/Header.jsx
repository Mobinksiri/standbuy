import React from "react";
import Container from "../../statics/Container/Container";
import classes from "./Header.module.scss";
import Text from "../../styles/Text";
import Emoji from "./Emoji";

const Header = () => {
   return (
      <div className={classes.header}>
         <Container>
            <div className={classes.header_box}>
               <div className={classes.header_box__dec}>
                  <div className={classes.header_box__dec___box}>
                     <Text type="Head1" color="white" element="h1">
                        <svg
                           width="171"
                           height="18"
                           viewBox="0 0 171 18"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M170 9.97785C135.479 3.73821 53.5507 -3.99285 2 15"
                              stroke="#FA6256"
                              stroke-width="6"
                           />
                        </svg>
                        استندبای؛ هوشمندترین ربات ترید ارزهای دیجیتال
                     </Text>
                     <Text type="Paragraph1" color="#C0C0C0" element="p">
                        استدبای یک ربات هوشمند ارزهای دیجیتال است براساس شاخص‌ها
                        با استفاده از هوش مصنوعی می‌تواند بهترین پیشنهادهای خرید
                        و فروش مارکت را با کمترین میزان ضرر پیش‌بینی کند.
                     </Text>
                     <Emoji />
                  </div>
               </div>
               <div className={classes.header_box__image}>
                  <img src="/header/phone.png" alt="standBuy" />
               </div>
            </div>
         </Container>
      </div>
   );
};

export default Header;
