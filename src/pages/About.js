import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AboutContent } from "../components/AboutContent";

export const About = () => {
  return (
    <div className="bg-gray-50  dark:bg-gray-800">
      <Header />
      <div id="about" className="mx-[500px] pt-[100px]">
        <h1 className="text-center text-black dark:text-white font-bold text-4xl mb-[16px]">
          ABOUT
        </h1>
        <AboutContent />
      </div>
      <Footer />
    </div>
  );
};
