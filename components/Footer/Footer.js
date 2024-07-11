import { Container, Grid, GridItem } from "@chakra-ui/layout";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import classes from "./Footer.module.css";
import { useMediaQuery } from "@chakra-ui/react";

export function Footer() {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  return (
    <Container maxW="1000px" className={classes.footer}>
      <Grid
        templateColumns={"repeat(1,1fr)"}
        templateRows={isMobile ? "repeat(2,1fr)" : "repeat(1,1fr)"}
      >
        {!isMobile && (
          <GridItem
            justifySelf="auto"
            style={{
              display: "flex",
              justifyContent: isMobile ? "center" : "left",
              alignItems: isMobile ? "center" : "left",
            }}
          >
            © 2024 Dhairya Chhabra
          </GridItem>
        )}
        <GridItem
          colStart={isMobile ? 1 : 2}
          justifySelf="auto"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MDBBtn
            size="md"
            floating
            style={{ backgroundColor: "#ac2bac" }}
            href="https://www.instagram.com/dhairyac23/"
            className={classes.icons}
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>
          <MDBBtn
            size="md"
            floating
            style={{ backgroundColor: "#333333" }}
            href="https://github.com/dhairya2001/"
            className={classes.icons}
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
          <MDBBtn
            size="md"
            floating
            style={{ backgroundColor: "#0082ca" }}
            href="https://www.linkedin.com/in/dhairya-chhabra/"
            className={classes.icons}
          >
            <MDBIcon fab icon="linkedin" />
          </MDBBtn>
          <MDBBtn
            size="md"
            floating
            style={{ backgroundColor: "#dd4b39" }}
            href="mailto:dhairyachhabra4747@gmail.com"
            className={classes.icons}
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>
        </GridItem>
        {isMobile && (
          <GridItem
            justifySelf="auto"
            style={{
              display: "flex",
              justifyContent: isMobile ? "center" : "left",
              alignItems: isMobile ? "center" : "left",
            }}
          >
            © 2024 Dhairya Chhabra
          </GridItem>
        )}
      </Grid>
    </Container>
  );
}
