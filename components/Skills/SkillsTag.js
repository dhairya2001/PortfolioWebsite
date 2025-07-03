import { useMediaQuery } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const links = [
  ["assets/skills/aws.png","AWS"],
  ["assets/skills/javascript.png", "Javascript"],
  ["assets/skills/python.png", "Python"],
  ["assets/skills/nodejs.png", "NodeJS"],
  ["assets/skills/typescript.png", "Typescript"],
  ["assets/skills/redux.png", "Redux"],
  ["assets/skills/postgre.png", "PostgreSQL"],
  ["assets/skills/mongodb.png", "MongoDB"],
  ["assets/skills/css.png", "CSS"],
  ["assets/skills/html.png", "HTML"],
  // ["assets/skills/tailwind.png", "Tailwind"],
  ["assets/skills/graphql.png", "GraphQL"],
  ["git.png", "Git"],
];

const SkillsTag = () => {
  const skills = links.map((link, index) => {
    return (
      <>
        <div>
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "10%",
              marginRight: "10%",
              height: "100px",
              width: "100px",
              borderRadius: "50%",
              backgroundColor: "#7FAEC5",
            }}
          >
            <Image src={link[0]} style={{ height: "80px", width: "80px" }} />
          </div>
          <div style={{ display: "flex",justifyContent:"center" }}>
            {link[1]}
          </div>
        </div>
      </>
    );
  });
  const [isMobile] = useMediaQuery("(max-width: 420px)");
  const [isApple] = useMediaQuery("(max-width: 600px)");
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2,1fr)" : isApple? "repeat(3,1fr)":"repeat(6, 1fr)",
          gap: "16px",
          marginTop: "16px",
          justifyContent: "center",
          marginLeft: isMobile ? "20px" : "0px",
          marginRight: isMobile ? "20px" : "0px",
        }}
      >
        {skills}
      </div>
    </>
  );
};
export default SkillsTag;
