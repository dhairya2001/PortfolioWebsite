"use client"
import { TypeAnimation } from "react-type-animation";
import {motion} from 'framer-motion';
import { Center, StackDivider } from "@chakra-ui/layout";
import { Container,GridItem, Grid,VStack,Box } from "@chakra-ui/layout";
import { Text,Image } from '@chakra-ui/react';
import { useMediaQuery } from "@chakra-ui/react";
import { dev, mobileView } from "../../constant";
import { DevCard } from "../Card/Card";

const Home=()=>{

    const ExampleComponent = () => {
        return (
          <TypeAnimation
            sequence={[
              'SOFTWARE ENGINEER',
              3000, 
              'FULL STACK DEVELOPER',
              3000,
              'APPLICATION DEVELOPER',
              3000,
            ]}
            wrapper="span"
            speed={20}
            style={{fontSize:"1em", display: 'inline-block' }}
            repeat={Infinity}
          />
        );
      };

    const [isMobile] = useMediaQuery(`(max-width: ${mobileView})`);
    const devItems=[
        dev.map((item,index)=>{
            return(
                <div key={index} style={{}}>
                    <DevCard title={item.title} img={item.img}/>
                </div>
            )
        })
    ]

    
    const [isTablet] = useMediaQuery('(min-width: 601px) and (max-width: 1024px)');
    const backgroundImage="public/expenses_image.jpg";
    return(
        <Container minHeight='100vh' maxWidth='70%' backgroundImage="" backgroundSize='cover' backgroundPosition='center'>
            <VStack spacing={4} align='stretch'>
            <Box h={isMobile?"400px":"150px"} >
                <Grid templateColumns='repeat(4, 1fr)' templateRows={isMobile?'repeat(2,1fr)':'repeat(2,1fr)'}  gap={2}>
                <GridItem  colSpan={isMobile ? 4 : 1} h={isMobile?'':'40'}>
                    <Center h="100%">
                    {/* <Image
                    borderRadius={100}
                    boxSize='120px'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                    /> */}
                    <Image style={{borderRadius:"50%",height:"150px",width:"150px"}} src='/assets/coding.gif' alt="CODING GIF"/>
                    </Center>
                </GridItem>
                <GridItem colSpan={isMobile ? 4 : 3} h='40' justifyContent="left">
                    <Text as='b' fontSize='50px'>Hey! 👋 I&apos;m <span style={{color:"#905fff"}}>Dhairya</span></Text>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <hr style={{ width: '50px', borderWidth: '2px', borderStyle: 'solid', margin: 0}} />
                        <Text as='b' style={{ marginRight: '10px' }}> &nbsp;  {ExampleComponent()}</Text>
                    </div>
                </GridItem>
                </Grid>
            </Box>
            <Box style={{marginTop:"100px",textAlign:"center"}} id="about">
                <Text>INTRODUCTION</Text>
                <Text fontSize={isMobile?"40px":"50px"} fontWeight="bold">
                    OVERVIEW
                </Text>
                    <Text fontSize='25px' >
                    {/* style={{color:"#a6a2bf"}} */}
                    I&apos;m a skilled software developer with experience in C/C++, Python, JavaScript, and Java, with profound knowledge in databases like MySQL, PostgreSQL and MongoDB. I&apos;m Skilled in frameworks and tools such as NextJS, ReactJS, and Nodejs. Let&apos;s work together to bring your ideas to life!
                    😊</Text>
            </Box>

            <Box>
                <Grid templateColumns={isMobile?'repeat(1,1fr)':'repeat(3,1fr)'} >
                    {devItems}
                </Grid>
                
            </Box> 
            </VStack>
        </Container>
    )
}
export default Home;