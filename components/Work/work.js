import { Text } from "@chakra-ui/layout";
import { WorkCardComponent } from "../Card/Card";
import SkillsTag from "../Skills/SkillsTag";
import { work } from "../../constant";

const Work = () => {
  const experience = [
    work.map((company) => {
      return (
        <>
          <WorkCardComponent
            title={company.companyName}
            designation={company.desingation}
            desc={company.desc}
            image={company.companyLogo}
            duration={company.duration}
            location={company.location}
          />
          <br />
        </>
      );
    }),
  ];
  return (
    <div
      style={{ minHeight: "100vh", paddingTop: "80px", marginTop: "20px" }}
      id="career"
    >
      <Text
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {" "}
        WHAT I HAVE DONE SO FAR
      </Text>
      <Text
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
        fontSize="35px"
        fontWeight="bold"
      >
        💼 WORK EXPERIENCE
      </Text>

      <div style={{ marginTop: "20px", marginBottom: "40px" }}>
        {experience}
      </div>
      <SkillsTag />
    </div>
  );
};
export default Work;
