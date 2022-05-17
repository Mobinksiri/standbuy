import React from "react";
import Text from "../../styles/Text";
import classes from "./Properties.module.scss";

const Property = ({ image, alt, icon, title, paragraph }) => {
   return (
      <div className={classes.properties_box__property}>
         <div className={classes.properties_box__property___image}>
            <img src={image} alt={alt} />
         </div>
         <div className={classes.properties_box__property___dec}>
            {icon}
            <Text type="Head3" element="h2" color="white">
               {title}
            </Text>
            <Text type="Paragraph1" element="p" color="#C0C0C0">
               {paragraph}
            </Text>
            <div className={classes.properties_box__property___dec____buttons}>
               <button type="button">
                  <svg
                     width="16"
                     height="16"
                     viewBox="0 0 16 16"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.8002 8.00001C1.8002 4.57585 4.57603 1.80001 8.0002 1.80001C11.4244 1.80001 14.2002 4.57585 14.2002 8.00001C14.2002 11.4242 11.4244 14.2 8.0002 14.2C4.57603 14.2 1.8002 11.4242 1.8002 8.00001ZM8.0002 0.200012C3.69237 0.200012 0.200195 3.69219 0.200195 8.00001C0.200195 12.3078 3.69237 15.8 8.0002 15.8C12.308 15.8 15.8002 12.3078 15.8002 8.00001C15.8002 3.69219 12.308 0.200012 8.0002 0.200012ZM8.11948 10.2121L11.7659 6.5657L10.6346 5.43433L7.20024 8.86864L5.36593 7.03433L4.23456 8.1657L6.28101 10.2121C6.78869 10.7198 7.6118 10.7198 8.11948 10.2121Z"
                        fill="#099E68"
                     />
                  </svg>
                  <Text type="HeadLink" color="white" element="h5">
                     نوتیفیکیشن
                  </Text>
               </button>
               <button type="button">
                  <svg
                     width="16"
                     height="16"
                     viewBox="0 0 16 16"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.8002 8.00001C1.8002 4.57585 4.57603 1.80001 8.0002 1.80001C11.4244 1.80001 14.2002 4.57585 14.2002 8.00001C14.2002 11.4242 11.4244 14.2 8.0002 14.2C4.57603 14.2 1.8002 11.4242 1.8002 8.00001ZM8.0002 0.200012C3.69237 0.200012 0.200195 3.69219 0.200195 8.00001C0.200195 12.3078 3.69237 15.8 8.0002 15.8C12.308 15.8 15.8002 12.3078 15.8002 8.00001C15.8002 3.69219 12.308 0.200012 8.0002 0.200012ZM8.11948 10.2121L11.7659 6.5657L10.6346 5.43433L7.20024 8.86864L5.36593 7.03433L4.23456 8.1657L6.28101 10.2121C6.78869 10.7198 7.6118 10.7198 8.11948 10.2121Z"
                        fill="#099E68"
                     />
                  </svg>
                  <Text type="HeadLink" color="white" element="h5">
                     پیامک
                  </Text>
               </button>
            </div>
         </div>
      </div>
   );
};

export default Property;
