import { useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";

const links=[
    '/git.png',
    '/assets/skills/css.png',
    '/assets/skills/html.png',
    '/assets/skills/javascript.png',
    '/assets/skills/mongodb.png',
    '/assets/skills/nodejs.png',
    '/assets/skills/postgre.png',
    '/assets/skills/python.png',
    '/assets/skills/redux.png',
    '/assets/skills/typescript.png',
    '/assets/skills/tailwind.png',
]

const SkillsTag=()=>{
    const skills=links.map((link,index)=>{
        return(
            <div key={index} style={{display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"8px",marginRight:"8px",height:"100px",width:"100px",borderRadius:"50%",backgroundColor:"#7FAEC5"}}>
                <Image src={link} height={80} width={80}/>
            </div>
        )
    })
    const [isMobile] = useMediaQuery('(max-width: 600px)');
    return(
        <>
            <div style={{display: "grid", gridTemplateColumns:isMobile?"repeat(2,1fr)":"repeat(6, 1fr)", gap: "16px", marginTop: "16px",  justifyContent: "center",marginLeft:isMobile?"20px":"0px",marginRight:isMobile?"20px":"0px"}}>
                {skills}
            </div>
        </>
    )
}
export default SkillsTag;