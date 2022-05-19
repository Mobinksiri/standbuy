import React from "react";
import classes from "./Accordion.module.scss";
import Container from "../../statics/Container/Container";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
   const accordionOpenHandler = (e) => {
      // remove activity for all
      const accordionBox = document.querySelectorAll("#accordion_box");
      const accordionArray = Array.from(accordionBox[0].children);

      for (let index = 0; index < accordionArray.length; index++) {
         const element = accordionArray[index];
         element.classList.remove(classes.accordion_box__item___active);
      }

      // active item
      const accordion_item = e.target.parentElement.parentElement;
      accordion_item.classList.add(classes.accordion_box__item___active);
   };

   return (
      <div className={classes.accordion}>
         <Container>
            <div id="accordion_box" className={classes.accordion_box}>
               <AccordionItem
                  className={`${classes.accordion_box__item} ${classes.accordion_box__item___active}`}
                  headClick={accordionOpenHandler}
                  title="سود بالای ۸۰٪"
                  paragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
                  image="./accordion/profit.jpg"
               />
               <AccordionItem
                  className={classes.accordion_box__item}
                  headClick={accordionOpenHandler}
                  title="تعیین دقیق میزان حد ضرر"
                  paragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
                  image="./accordion/loss.jpg"
               />
               <AccordionItem
                  className={classes.accordion_box__item}
                  headClick={accordionOpenHandler}
                  title="گارانتی"
                  paragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
                  image="./accordion/post.png"
               />
               <AccordionItem
                  className={classes.accordion_box__item}
                  headClick={accordionOpenHandler}
                  title="هوش مصنوعی پیشرفته"
                  paragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
                  image="./accordion/machine.jpg"
               />
               <AccordionItem
                  headClick={accordionOpenHandler}
                  title="پیشنهاد شگفت‌انگیز"
                  paragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
                  image="./accordion/chart.jpg"
               />
            </div>
         </Container>
      </div>
   );
};

export default Accordion;
