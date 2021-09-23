import "../../App.scss";
import MainSection from "../MainSection";
import Projects from "../Projects";
import AboutMe from "../AboutMe";
import ContactItem from "../Contacts";

export default function Home() {
  return (
    <>
      <MainSection />
      <Projects />
      <AboutMe />
      <ContactItem />
    </>
  );
}
