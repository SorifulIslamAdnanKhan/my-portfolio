import About from "@/components/About";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function Home() {
  return (
    <main className="">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Blog />
      <CTA />
      <Footer />
    </main>
  );
}
