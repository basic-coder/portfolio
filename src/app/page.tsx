import { FaHome } from "react-icons/fa";
import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNav";
import "./globals.css";
import Grid from "./components/Grid";
import { navItems } from "./data";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative flex bg-custom-black justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <Experience />
        <Projects />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
}
