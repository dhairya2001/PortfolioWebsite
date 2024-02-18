"use client"
import Home from "../components/HomePage/Home";
import Work from "../components/Work/work";
import Projects from "../components/Projects/project";
import Education from "../components/Education/education";
import ContactForm from "../components/ContactForm/form";


const HomePage=()=>{
  return (
    <>
      <Home/>
      <Projects/>
      <Work/>
      <Education/>
      <ContactForm/>
    </>
  )
}
export default HomePage;