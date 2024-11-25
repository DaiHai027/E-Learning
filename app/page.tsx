import Image from "next/image";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Hero from "../components/homepage/Hero";
import Service from "../components/homepage/Service";
import Feature from "../components/homepage/Feature";
import Industry from "../components/homepage/Industry";
import Technology from "../components/homepage/Technology";
import Methodology from "../components/homepage/Methodology";
import Partner from "../components/homepage/Partner";
import Experience from "../components/homepage/Experience";
import Question from "../components/homepage/Question";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen w-full max-w-full overflow-hidden bg-white">
      <Header />
      <Hero />
      <Service />
      <Feature />
      <Industry />
      <Technology />
      <Methodology />
      <Partner />
      <Experience />
      <Question />
      <Footer />
    </div>
  );
}
