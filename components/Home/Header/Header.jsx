import React from "react";
import Container from "../../statics/Container/Container";
import classes from "./Header.module.scss";
import Text from "../../styles/Text";

const Header = () => {
   return (
      <div className={classes.header}>
         <Container>
            <Text type="Head4" color="right"></Text>
         </Container>
      </div>
   );
};

export default Header;
