import { Text } from "@chakra-ui/layout";
import { ProjectCardComponent } from "../Card/Card";
import { projects } from "../../constant";

const Projects = () => {
  const projectItems = [
    projects.map((proj, index) => {
      return (
        <div key={index}>
          <ProjectCardComponent
            title={proj.name}
            desc={proj.desc}
            tags={proj.tags}
            link={proj.link}
          />
        </div>
      );
    }),
  ];

  return (
    <div style={{ minHeight: "100vh", paddingTop: "80px" }} id="projects">
      <div style={{ marginTop: "20px" }}>
        <Text justifyContent="center" textAlign="center">
          MY WORK
        </Text>
        <Text fontWeight="bold" fontSize="50px" textAlign="center">
          👨🏻‍💻 PROJECTS
        </Text>
      </div>
      {projectItems}
    </div>
  );
};
export default Projects;
