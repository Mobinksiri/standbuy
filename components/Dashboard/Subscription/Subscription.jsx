import React from "react";
import Text from "../../styles/Text";
import classes from "./Subscription.module.scss";

const Subscription = () => {
   const telegramTokenHandler = (e) => {
      const button = e.target;
      button.style.opacity = "0.5";
      button.children[1].innerHTML = "توکن فعال شده است";
   };

   return (
      <div className={classes.subscription}>
         <div className={classes.subscription_active}>
            <div className={classes.subscription_active__box}>
               <Text type="Body4" color="white" element="h4">
                  اشتراک فعال
               </Text>
               <div className={classes.subscription_active__box___table}>
                  <div
                     className={classes.subscription_active__box___table____col}
                  >
                     <Text type="Body5" color="white" element="p">
                        نوع
                     </Text>
                     <Text type="Body5" color="white" element="h6">
                        اقتصادی
                     </Text>
                  </div>
                  <div
                     className={classes.subscription_active__box___table____col}
                  >
                     <Text type="Body5" color="white" element="p">
                        روزهای باقی مانده
                     </Text>
                     <Text type="Body5" color="white" element="h6">
                        ۶ روز
                     </Text>
                  </div>
                  <div
                     className={classes.subscription_active__box___table____col}
                  >
                     <Text type="Body5" color="white" element="p">
                        قیمت
                     </Text>
                     <Text type="Body5" color="white" element="h6">
                        ۱۶۹/۰۰۰تومان
                     </Text>
                  </div>
                  <div
                     className={classes.subscription_active__box___table____col}
                  >
                     <Text type="Body5" color="white" element="p">
                        تاریخ خرید
                     </Text>
                     <Text type="Body5" color="white" element="h6">
                        ۲۷ آذر ۱۴۰۰
                     </Text>
                  </div>
                  <div
                     className={classes.subscription_active__box___table____col}
                  >
                     <Text type="Body5" color="white" element="p">
                        تاریخ سر رسید
                     </Text>
                     <Text type="Body5" color="white" element="h6">
                        ۲۱ دی ۱۴۰۰
                     </Text>
                  </div>
               </div>
               <button
                  onClick={telegramTokenHandler}
                  type="button"
                  className={classes.subscription_active__box___telegramButton}
               >
                  <svg
                     width="20"
                     height="20"
                     viewBox="0 0 20 20"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M9.95334 2.72223e-05C7.30927 0.0123664 4.7777 1.07138 2.91241 2.94541C1.04713 4.81944 -2.87909e-05 7.35593 5.93696e-10 10C5.93701e-10 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9465 7.34784 20 10 20C12.6522 20 15.1957 18.9465 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34786 18.9464 4.80432 17.0711 2.92896C15.1957 1.0536 12.6522 2.72223e-05 10 2.72223e-05C9.98445 -9.07409e-06 9.96889 -9.07409e-06 9.95334 2.72223e-05ZM14.0883 6.02003C14.1717 6.01836 14.3558 6.0392 14.4758 6.1367C14.5556 6.20594 14.6064 6.30259 14.6183 6.40753C14.6317 6.48503 14.6483 6.66253 14.635 6.80086C14.485 8.38253 13.8333 12.2192 13.5017 13.99C13.3617 14.74 13.0858 14.9909 12.8183 15.015C12.2383 15.0692 11.7975 14.6317 11.235 14.2634C10.355 13.6859 9.8575 13.3267 9.00334 12.7634C8.01584 12.1134 8.65584 11.755 9.21834 11.1717C9.36584 11.0184 11.9242 8.69086 11.9742 8.48003C11.98 8.45336 11.9858 8.35503 11.9275 8.30336C11.8692 8.2517 11.7825 8.2692 11.72 8.28336C11.6317 8.30336 10.2258 9.23336 7.5025 11.0709C7.1025 11.3459 6.74167 11.4792 6.4175 11.4709C6.06083 11.4642 5.37417 11.27 4.86333 11.1042C4.23667 10.9 3.73917 10.7925 3.7825 10.4467C3.805 10.2667 4.05333 10.0825 4.52667 9.8942C7.44167 8.6242 9.385 7.7867 10.3583 7.38253C13.135 6.22753 13.7125 6.0267 14.0883 6.02003Z"
                        fill="white"
                     />
                  </svg>
                  <Text type="Head6" color="white" element="h6">
                     فعالسازی توکن
                  </Text>
               </button>
            </div>
         </div>
         <div className={classes.subscription_disable}>
            <div className={classes.subscription_disable__box}>
               <Text type="Body4" color="white" element="h4">
                  اشتراک فعال
               </Text>
               <div className={classes.subscription_disable__box___table}>
                  <div
                     className={
                        classes.subscription_disable__box___table____col
                     }
                  >
                     <Text type="Body5" color="white" element="p">
                        نوع
                     </Text>
                     <Text type="Body5" color="white" element="h6">
                        اقتصادی
                     </Text>
                  </div>
                  <div
                     className={
                        classes.subscription_disable__box___table____col
                     }
                  >
                     <Text type="Body5" color="white" element="p">
                        قیمت
                     </Text>
                     <Text type="Body5" color="white" element="h6">
                        ۱۶۹/۰۰۰ تومان
                     </Text>
                  </div>
                  <div
                     className={
                        classes.subscription_disable__box___table____col
                     }
                  >
                     <Text type="Body5" color="white" element="p">
                        تاریخ خرید
                     </Text>
                     <Text type="Body5" color="white" element="h6">
                        ۲۳ شهریور ۱۴۰۰
                     </Text>
                  </div>
                  <div
                     className={
                        classes.subscription_disable__box___table____col
                     }
                  >
                     <Text type="Body5" color="white" element="p">
                        تاریخ سر رسید
                     </Text>
                     <Text type="Body5" color="white" element="h6">
                        ۱۶ مهر ۱۴۰۰
                     </Text>
                  </div>
                  <div
                     className={
                        classes.subscription_disable__box___table____col
                     }
                  >
                     <Text type="Body5" color="white" element="p">
                        نوع
                     </Text>
                     <Text type="Body5" color="white" element="h6">
                        پایه
                     </Text>
                  </div>
                  <div
                     className={
                        classes.subscription_disable__box___table____col
                     }
                  >
                     <Text type="Body5" color="white" element="p">
                        قیمت
                     </Text>
                     <Text type="Body5" color="white" element="h6">
                        ۱۰۹٫۰۰۰ تومانءء
                     </Text>
                  </div>
                  <div
                     className={
                        classes.subscription_disable__box___table____col
                     }
                  >
                     <Text type="Body5" color="white" element="p">
                        تاریخ خرید
                     </Text>
                     <Text type="Body5" color="white" element="h6">
                        ۳۰ بهمن ۱۳۹۹
                     </Text>
                  </div>
                  <div
                     className={
                        classes.subscription_disable__box___table____col
                     }
                  >
                     <Text type="Body5" color="white" element="p">
                        تاریخ سر رسید
                     </Text>
                     <Text type="Body5" color="white" element="h6">
                        ۳۰ اسفند ۱۳۹۹
                     </Text>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Subscription;
