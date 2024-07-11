import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Container, Center, Box, Flex, Divider } from "@chakra-ui/react";
import {
  Image,
  useMediaQuery,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
} from "@chakra-ui/react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { Button, useDisclosure } from "@chakra-ui/react";
import classes from "./HeaderSimple.module.css";
import { useColorModeContext } from "../../utils/colorModeContext";

const links = [
  { link: "/#about", label: "About" },
  { link: "/#projects", label: "Projects" },
  { link: "/#career", label: "Work" },
  { link: "/#education", label: "Education" },
  { link: "/#contact", label: "Contact" },
  { link: "resume", label: "Resume" },
];

export function HeaderSimple() {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  const [active, setActive] = useState(links[0].link);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorModeContext();

  const downloadResume = () => {
    const resumePath = "Dhairya_Resume.pdf";
    const link = document.createElement("a");
    link.href = resumePath;
    link.target = "_blank";
    link.download = "DhairyaChhabra_Resume.pdf";
    link.click();
  };

  const items = links.map((link, index) => (
    <span key={link.label}>
      {link.label === "Resume" ? (
        <a
          className={classes.link}
          style={{ fontSize: "20px", fontWeight: "bold", cursor: "pointer" }}
          onClick={downloadResume}
        >
          {link.label}
        </a>
      ) : (
        <Link
          href={link.link}
          onClick={onClose}
          className={classes.link}
          style={{ fontSize: "20px", fontWeight: "bold" }}
        >
          {link.label}
        </Link>
      )}
      {isMobile && index < links.length - 1 && <Divider my={2} />}
    </span>
  ));
  useEffect(() => {
    localStorage.setItem("theme", colorMode);
  }, [colorMode]);

  return (
    <div
      className={classes.header}
      style={{
        backgroundColor: colorMode === "dark" ? "#1a202c" : "#f0f0f0",
        color: colorMode === "dark" ? "white" : "black",
      }}
    >
      <Container maxW="1200px" className={classes.inner}>
        <div className={classes.logoContainer}>
          <Center h="100%">
            <Link href="/" className={classes.link}>
              <Image
                borderRadius={100}
                boxSize="50px"
                border="3px solid"
                borderColor={colorMode === "dark" ? "green" : "pink"}
                src="profilePic.jpeg"
                alt="Dan Abramov"
              />
            </Link>
          </Center>
        </div>
        {!isMobile ? (
          <div className={classes.itemsContainer}>
            {items}
            <Button
              onClick={toggleColorMode}
              colorScheme="none"
              size="lg"
              fontSize="30px"
            >
              {colorMode === "dark" ? "⛅" : "🌙"}
            </Button>
          </div>
        ) : (
          <>
            <Flex alignItems="center">
              <Button
                onClick={toggleColorMode}
                colorScheme="none"
                size="lg"
                fontSize="30px"
              >
                {colorMode === "dark" ? "⛅" : "🌙"}
              </Button>
              <MDBBtn
                size="lg"
                floating
                style={{ backgroundColor: "grey" }}
                onClick={onOpen}
              >
                <MDBIcon fas icon="bars" />
              </MDBBtn>
              <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerBody>
                    <Flex
                      flexDirection="column"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "50px",
                      }}
                    >
                      {items}
                    </Flex>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Flex>
          </>
        )}
      </Container>
    </div>
  );
}
