import Hero from "./[components]/Hero";
import Services from "./[components]/Services";
import Testimonials from "./[components]/Testimonials";
import Methodology from "./[components]/Methodology";
import Villain from "./[components]/Villain";
import FAQ from "./[components]/FAQ";
import Footer from "./[components]/Footer";

export default function Home() {
  return (
    <main className="flexspace-y-28 max-sm:space-y-2 flex-col overflow-x-hidden text-white text-center items-center">
      {/* <Header /> */}
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
