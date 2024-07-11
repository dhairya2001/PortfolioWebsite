import { Text } from "@chakra-ui/layout";
import { EducationCardComponent } from "../Card/Card";
import { education } from "../../constant";

const Education = () => {
  const Universities = [
    education.map((univ) => {
      return (
        <>
          <EducationCardComponent
            title={univ.name}
            desc={univ.desc}
            image={univ.logo}
            duration={univ.duration}
            location={univ.location}
          />
          <br />
        </>
      );
    }),
  ];
  return (
    <div
      style={{ minHeight: "100vh", paddingTop: "80px", marginTop: "20px" }}
      id="education"
    >
      <Text
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        {" "}
        EXPLORING MY ACADEMIC JOURNEY
      </Text>
      <Text
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        fontSize="35px"
        fontWeight="bold"
      >
        🏫 EDUCATION
      </Text>

      <div style={{ marginTop: "40px" }}>
        {Universities}
        {/* <AboutCard title="Savitribai Phule Pune University" image='/sppu.jpeg'/> */}
      </div>
    </div>
  );
};
export default Education;
