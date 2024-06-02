import About from "@/components/About";
import Skills from "@/components/Skills";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function Home() {
  return (
    <main className="">
      <Header />
      <About />
      <Skills />
      <Footer />
    </main>
  );
}
