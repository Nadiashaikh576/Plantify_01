import About from "./about/page";
import Benefits from "./benefits/page";
import Contact from "./contact/page";
import Hero from "./hero/page";
import Chat from "./../chat"
import BestPlants from "./bestPlants/page";

export default function Home() {
  return (
    <>
     <Hero/>
     <About/>
     <BestPlants/>
     <Benefits/>
     <Contact/>
     <Chat/>
    </>
  );
}
