/* eslint-disable jsx-a11y/alt-text */
"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Text,
  Heading,
  Image,
  Grid,
  GridItem,
  useMediaQuery,
  Tag,
  HStack,
} from "@chakra-ui/react";
import classes from "./Card.module.css";
import { LinkIcon } from "@chakra-ui/icons";
import { mobileView } from "../../constant";

export function ProjectCardComponent(props) {
  const [isMobile] = useMediaQuery(`(max-width: ${mobileView})`);
  return (
    <Card
      align="center"
      variant="filled"
      className={isMobile ? classes.mobileCardProjects : classes.projectCard}
    >
      <CardHeader>
        <Heading size="md" textAlign="center">
          {props.title}
        </Heading>
      </CardHeader>
      <CardBody>
        <Text textAlign="center" fontSize="13px">
          {props.desc}
        </Text>
        <HStack spacing={3} justifyContent="center">
          {props.tags.map((name) => (
            <Tag
              key="sm"
              variant="solid"
              colorScheme="teal"
              fontSize={isMobile ? "8px" : "12px"}
              textAlign="center"
            >
              {name}
            </Tag>
          ))}
        </HStack>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button
            onClick={() => {
              window.open(props.link, "_blank");
            }}
            colorScheme="blue"
          >
            <LinkIcon marginRight={2} />
            View
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

export const WorkCardComponent = (props) => {
  const [isMobile] = useMediaQuery(`(max-width: ${mobileView})`);
  return (
    <div className={classes.border}>
      <Card align="left" variant="filled" className={classes.card}>
        <Grid templateColumns={"repeat(12,1fr)"} style={{ marginTop: "10px" }}>
          <GridItem
            colSpan={6}
            colStart={1}
            style={{ marginLeft: "10px", display: "flex" }}
          >
            <Image
              borderRadius={100}
              boxSize="30px"
              src={props.image}
              alt="I"
            />
            <Text
              size="lg"
              as="b"
              style={{ marginLeft: "10px", fontSize: "18px" }}
            >
              {props.title} &nbsp;
              <Text size="sm" as="i" fontSize="12px">
                {props.location}
              </Text>
            </Text>
          </GridItem>
          <GridItem colSpan={6} colStart={10} style={{ display: "flex" }}>
            {props.duration}
          </GridItem>
        </Grid>
        <Grid>
          <GridItem>
            <Text style={{ marginLeft: "50px", fontSize: "12px" }}>
              {props.designation}
            </Text>
          </GridItem>
        </Grid>
        <div
          style={{
            marginTop: "0px",
            marginLeft: "20px",
            fontSize: "12px",
            marginRight: "20px",
          }}
        >
          <ul>
            {props.desc &&
              Array.isArray(props.desc) &&
              props.desc.map((ele) => {
                return (
                  <>
                    <li>{ele}</li>
                  </>
                );
              })}
          </ul>
        </div>
      </Card>
    </div>
  );
};

export const EducationCardComponent = (props) => {
  const [isMobile] = useMediaQuery(`(max-width: ${mobileView})`);
  return (
    <div className={classes.border}>
      <Card align="left" variant="filled" className={classes.card}>
        <Grid templateColumns={"repeat(12,1fr)"} style={{ marginTop: "10px" }}>
          <GridItem
            colSpan={7}
            colStart={1}
            style={{ marginLeft: "10px", display: "flex" }}
          >
            <Image
              borderRadius={100}
              boxSize="30px"
              src={props.image}
              alt="I"
            />
            <Text
              size="lg"
              as="b"
              style={{ marginLeft: "10px", fontSize: "18px" }}
            >
              {props.title} &nbsp;
              <Text size="sm" as="i" fontSize="12px">
                {props.location}
              </Text>
            </Text>
          </GridItem>
          <GridItem colSpan={6} colStart={10} style={{ display: "flex" }}>
            {props.duration}
          </GridItem>
        </Grid>
        <Grid>
          <GridItem>
            <Text style={{ marginLeft: "50px", fontSize: "12px" }}>
              {props.designation}
            </Text>
          </GridItem>
        </Grid>
        <div
          style={{
            marginTop: "0px",
            marginLeft: "20px",
            fontSize: "12px",
            marginRight: "20px",
          }}
        >
          <Text>Courses Taken</Text>
          <ul>
            {props.desc &&
              Array.isArray(props.desc) &&
              props.desc.map((ele) => {
                return (
                  <>
                    <li>{ele}</li>
                  </>
                );
              })}
          </ul>
        </div>
      </Card>
    </div>
  );
};

export const DevCard = (props) => {
  return (
    <div className={classes.devBorder}>
      <Card align="left" variant="filled" className={classes.devCard}>
        <div className={classes.devImage}>
          <Image src={props.img} width="80px" height="80px" />
        </div>
        <div className={classes.devType}>
          <Text size="lg" fontWeight="bold" fontSize="30px" textAlign="center">
            {props.title}
          </Text>
        </div>
      </Card>
    </div>
  );
};
