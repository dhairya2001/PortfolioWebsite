"use client";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Center, StackDivider } from "@chakra-ui/layout";
import { Container, GridItem, Grid, VStack, Box } from "@chakra-ui/layout";
import { Text, Image } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { dev, mobileView } from "../../constant";
import { DevCard } from "../Card/Card";

const Home = () => {
  const ExampleComponent = () => {
    return (
      <TypeAnimation
        sequence={[
          "SOFTWARE ENGINEER",
          3000,
          "FULL STACK DEVELOPER",
          3000,
          "APPLICATION DEVELOPER",
          3000,
        ]}
        wrapper="span"
        speed={20}
        style={{ fontSize: "1em", display: "inline-block" }}
        repeat={Infinity}
      />
    );
  };

  const [isMobile] = useMediaQuery(`(max-width: ${mobileView})`);
  const devItems = [
    dev.map((item, index) => {
      return (
        <div key={index} style={{}}>
          <DevCard title={item.title} img={item.img} />
        </div>
      );
    }),
  ];

  const [isTablet] = useMediaQuery(
    "(min-width: 601px) and (max-width: 1024px)"
  );
  const backgroundImage = "public/expenses_image.jpg";
  return (
    <Container
      minHeight="100vh"
      maxWidth="70%"
      backgroundImage=""
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <VStack spacing={4} align="stretch">
        <Box h={isMobile ? "400px" : "150px"}>
          <Grid
            templateColumns="repeat(4, 1fr)"
            templateRows={isMobile ? "repeat(2,1fr)" : "repeat(2,1fr)"}
            gap={2}
          >
            <GridItem colSpan={isMobile ? 4 : 1} h={isMobile ? "" : "40"}>
              <Center h="100%">
                <Image
                  style={{
                    borderRadius: "50%",
                    height: "150px",
                    width: "150px",
                  }}
                  src="coding.gif"
                  alt="CODING GIF"
                />
              </Center>
            </GridItem>
            <GridItem colSpan={isMobile ? 4 : 3} h="40" justifyContent="left">
              <Text as="b" fontSize="50px">
                Hey! 👋 I&apos;m{" "}
                <span style={{ color: "#905fff" }}>Dhairya</span>
              </Text>
              <div style={{ display: "flex", alignItems: "center" }}>
                <hr
                  style={{
                    width: "50px",
                    borderWidth: "2px",
                    borderStyle: "solid",
                    margin: 0,
                  }}
                />
                <Text as="b" style={{ marginRight: "10px" }}>
                  {" "}
                  &nbsp; {ExampleComponent()}
                </Text>
              </div>
            </GridItem>
          </Grid>
        </Box>
        <Box style={{ marginTop: "100px", textAlign: "center" }} id="about">
          <Text>INTRODUCTION</Text>
          <Text fontSize={isMobile ? "40px" : "50px"} fontWeight="bold">
            OVERVIEW
          </Text>
          <Text fontSize="25px">
            {/* style={{color:"#a6a2bf"}} */}
            Software Engineer with 3+ years of experience designing, building, and shipping end-to-end web applications and cloud-native backend services across education, retail, and enterprise platforms. Skilled in Java, Spring Boot, Python, FastAPI, Django, Node.js, Express.js, TypeScript, React.js, Next.js, REST APIs, PostgreSQL, MongoDB, Redis, Apache Kafka, AWS, Docker, Kubernetes, and CI/CD. Comfortable owning features from responsive React interfaces through distributed microservices, event- driven pipelines, and production monitoring, with a focus on performance, reliability, testing, and clean, maintainable code.
          </Text>
        </Box>

        <Box>
          <Grid templateColumns={isMobile ? "repeat(1,1fr)" : "repeat(3,1fr)"}>
            {devItems}
          </Grid>
        </Box>
      </VStack>
    </Container>
  );
};
export default Home;
