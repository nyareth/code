import Image from "next/image";
import Header from "./[components]/Header";
import Hero from "./[components]/Hero";
import Services from "./[components]/Services";
import Testimonials from "./[components]/Testimonials";
import Methodology from "./[components]/Methodology";
import Villain from "./[components]/Villain";
import FAQ from "./[components]/FAQ";
import Footer from "./[components]/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen space-y-28 flex-col text-white text-center items-center">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Methodology />
      <Villain />
      <FAQ />
      <Footer />
    </main>
  );
}
