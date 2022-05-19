import React from "react";
import classes from "./Questions.module.scss";
import Text from "../../styles/Text";
import Question from "./Question";
import Container from "../../statics/Container/Container";

const Questions = () => {
   const openQuestionHandler = (e) => {
      const questions = document.querySelector("#questions");
      const questionsArray = Array.from(questions.children);
      for (let index = 0; index < questionsArray.length; index++) {
         const element = questionsArray[index];
         element.classList.remove(
            classes.questions_box__questions___question____active
         );
      }
      const question = e.target.parentElement;
      question.classList.add(
         classes.questions_box__questions___question____active
      );
   };

   return (
      <div className={classes.questions}>
         <Container>
            <div className={classes.questions_box}>
               <div className={classes.questions_box__header}>
                  <svg
                     width="50"
                     height="50"
                     viewBox="0 0 50 50"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <circle cx="25" cy="25" r="25" fill="#321411" />
                     <path
                        d="M22.991 37.0534H27.0089V33.0356H22.991V37.0534Z"
                        fill="#FA6256"
                     />
                     <path
                        d="M33.0356 20.982C33.0356 16.5423 29.4397 12.9463 24.9999 12.9463C20.5602 12.9463 16.9642 16.5423 16.9642 20.982C16.9642 26.0043 22.991 26.5066 22.991 31.0266H27.0089C27.0089 24.4976 20.9821 24.9999 20.9821 20.982C20.9821 18.7722 22.7901 16.9641 24.9999 16.9641C27.2098 16.9641 29.0178 18.7722 29.0178 20.982H33.0356Z"
                        fill="#FA6256"
                     />
                  </svg>
                  <Text type="Head2" element="h2" color="white">
                     سوالات متداول
                  </Text>
                  <Text type="Paragraph1" element="p" color="#C0C0C0">
                     در این بخش می توانید سوالات متداولی که توسط مشتریان و
                     مخاطبان پرسیده می‌شود را مشاهده نمائید.
                  </Text>
               </div>
               <div id="questions" className={classes.questions_box__questions}>
                  <Question
                     onClick={openQuestionHandler}
                     className={`${classes.questions_box__questions___question} ${classes.questions_box__questions___question____active}`}
                     title="من کارت ملی هوشمند دریافت نکرده‌ام، آیا می‌توانم حساب بازکنم؟"
                     paragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
                  />
                  <Question
                     onClick={openQuestionHandler}
                     className={classes.questions_box__questions___question}
                     title="برای بازکردن حساب حتما باید شماره تلفن همراه به نام خودم باشد؟"
                     paragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
                  />
                  <Question
                     onClick={openQuestionHandler}
                     className={classes.questions_box__questions___question}
                     title="چطور می‌توانم ثبت‌نام خود را لغو کنم؟"
                     paragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
                  />
                  <Question
                     onClick={openQuestionHandler}
                     className={classes.questions_box__questions___question}
                     title="برای بازکردن حساب تابعیت ایرانی ضروری است؟"
                     paragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
                  />
                  <Question
                     onClick={openQuestionHandler}
                     className={classes.questions_box__questions___question}
                     title="شرایط خاصی برای ارسال ویدئو جهت شناسایی هویت وجود دارد؟"
                     paragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
                  />
                  <Question
                     onClick={openQuestionHandler}
                     className={classes.questions_box__questions___question}
                     title="می‌توانم بیش از یک حساب داشته باشم؟"
                     paragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
                  />
                  <Question
                     onClick={openQuestionHandler}
                     className={classes.questions_box__questions___question}
                     title="تضمین ویژه‌ای برای محرمانه تلقی شدن اطلاعات ارائه شده وجود دارد؟"
                     paragraph="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."
                  />
               </div>
            </div>
         </Container>
      </div>
   );
};

export default Questions;
