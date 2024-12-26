import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import ResumePage from "./resume/page";
import ServicesPage from "./services/page";
import Contact from "./contact/page";
import WorkPage from "./work/page";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Omar Faruk</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences an I am proficient
              in various programming language and technologies.
            </p>
            {/* button & social */}

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="https://drive.google.com/file/d/15zi-hiDummaL_hYAVEyLch8Lx8ZJGDOB/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyle="flex gap-6"
                  iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
      <h1 className="container mx-auto h-full text-accent bg-[#27272c] text-5xl text-center items-center py-5 mt-20 ">
        Services
      </h1>
      <ServicesPage />
      <h1 className="container mx-auto h-full text-accent bg-[#27272c] text-5xl text-center items-center py-5 mb-10 ">
        Resume
      </h1>
      <ResumePage />
      <h1 className="container mx-auto h-full text-accent bg-[#27272c] text-5xl text-center items-center py-5 mt-20 ">
        Work
      </h1>
      <WorkPage />
      <h1 className="container mx-auto h-full text-accent bg-[#27272c] text-5xl text-center items-center py-5">
        Contact
      </h1>
      <Contact />
      <h1 className=" h-full text-accent bg-[#27272c] text-[20px] text-center items-center py-2">
        <span className="text-white/60">Designed & Crafted by</span> Muhammad Omar
      </h1>
    </section>
  );
};

export default Home;
