import React, { useState, useEffect } from "react";

const Text = ({ color, type, element = "p", children, onClick, id }) => {
   // states
   const [fontColor, setFontColor] = useState(color);
   const [family, setFamily] = useState("normal");
   const [height, setHeight] = useState("24px");
   const [space, setSpace] = useState("0px");
   const [size, setSize] = useState("18px");

   // handle size and color text
   const textHandler = () => {
      switch (type) {
         case "Head1":
            setFamily("iranSans-extraBold");
            setSize("48px");
            setHeight("70px");
            setSpace("-0.02em");
            break;
         case "Head2":
            setFamily("iranSans-extraBold");
            setSize("38px");
            setHeight("52px");
            setSpace("-0.02em");
            break;
         case "Head3":
            setFamily("iranSans-extraBold");
            setSize("30px");
            setHeight("48px");
            setSpace("-0.02em");
            break;
         case "Head4":
            setFamily("iranSans-extraBold");
            setSize("24px");
            setHeight("32px");
            break;
         case "Head5":
            setFamily("iranSans-extraBold");
            setSize("20px");
            setHeight("30px");
            break;
         case "Head6":
            setFamily("iranSans-extraBold");
            setSize("18px");
            setHeight("26px");
            break;
         case "Head7":
            setFamily("iranSans-extraBold");
            setSize("14px");
            setHeight("21px");
            break;
         case "HeadLink":
            setFamily("iranSans-extraBold");
            setSize("16px");
            setHeight("24px");
            break;
         case "Body1":
            setFamily("iranSans-bold");
            setSize("22px");
            setHeight("33px");
            break;
         case "Body2":
            setFamily("iranSans-bold");
            setSize("20px");
            setHeight("18px");
            break;
         case "Body3":
            setFamily("iranSans-bold");
            setSize("18px");
            setHeight("26px");
            break;
         case "Body4":
            setFamily("iranSans-bold");
            setSize("14px");
            setHeight("21px");
            break;
         case "Body4":
            setFamily("iranSans-bold");
            setSize("16px");
            setHeight("18px");
            break;
         case "Medium1":
            setFamily("iranSans-medium");
            setSize("16px");
            setHeight("24px");
            break;
         case "Medium2":
            setFamily("iranSans-medium");
            setSize("14px");
            setHeight("24px");
            break;
         case "Paragraph1":
            setFamily("iranSans-normal");
            setSize("18px");
            setHeight("28px");
            break;
         case "Paragraph2":
            setFamily("iranSans-normal");
            setSize("16px");
            setHeight("24px");
            break;
         case "Paragraph3":
            setFamily("iranSans-normal");
            setSize("14px");
            setHeight("21px");
            break;
         default:
            break;
      }
   };
   const colorHandler = () => {
      switch (color) {
         case "black":
            setFontColor("var(--black)");
            break;
         case "white":
            setFontColor("var(--white)");
            break;
         case "orange":
            setFontColor("var(--orange)");
            break;
         default:
            break;
      }
   };

   // styles
   const TextStyle = {
      fontFamily: family,
      color: fontColor,
      letterSpacing: space,
      lineHeight: height,
      fontSize: size,
   };

   // custom tag name
   const CustomTag = element;

   //useEffect
   useEffect(() => {
      textHandler();
      colorHandler();
   }, []);

   return (
      <CustomTag id={id} onClick={onClick} style={TextStyle}>
         {children}
      </CustomTag>
   );
};

export default Text;
