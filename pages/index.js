"use client"
import Home from "../components/HomePage/Home";
import Work from "../components/Work/work";
import Projects from "../components/Projects/project";
import Stars from "../components/Background/background";
import styles from "../components/Background/background.module.css";
import Education from "../components/Education/education";
import ContactForm from "../components/ContactForm/form";

const Wrapper = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);

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