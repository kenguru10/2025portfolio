import Image from "next/image";
import profileImg from "../public/profile.png";
import { AWSIcon, CEXIcon, DesignIcon, DivingKpopIcon, GoogleIcon, HarvardIcon, HTMLIcon, InfrastructureIcon, JSIcon, NodeIcon, PHPIcon, PolyuIcon, PythonIcon, ReactIcon, SolutionIcon, WebsiteIcon } from "./icons";

// reference link: https://dribbble.com/shots/24759521-COZYDIADORA-Personal-Portfolio-Website

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F6F6F6]">
      <header className="bg-white m-3 px-5 py-1 flex items-center rounded-xl text-gray-800 fade-in fade-delay-0">
        <a href="/" className="font-bold">KENKONG</a>
        <a href="" className="bg-gray-800 text-white ms-auto px-5 py-3 my-2 text-sm rounded-full shadow-md fade-in fade-delay-2">Contact Me</a>
      </header>

      <section className="px-5 md:px-40 mt-10">
        <div className="flex md:flex-row flex-col items-center gap-5">
          <div className="flex flex-col max-w-lg fade-in-up fade-delay-1">
            <h1 className="text-6xl font-bold text-gray-800 fade-in fade-delay-2">Hi, I'm Ken Kong. A Full-Stack Developer</h1>
            <p className="text-base text-gray-500 my-10 fade-in fade-delay-3">I have 4 years of experience in building web applications with startups and established companies.</p>
            <a href="#" className="bg-gray-800 w-fit text-white px-5 py-3 my-2 text-sm rounded-full shadow-md fade-in fade-delay-4">Contact Me</a>
          </div>
          <div className="flex flex-col ms-0 md:ms-auto">
            <div className="relative w-[200px] h-[200px] fade-in fade-delay-2">
              <Image
                src={profileImg}
                fill
                alt="Profile Picture"
                className="rounded-lg object-cover"
                sizes="200px"
              />
            </div>
            <div className="flex justify-center w-full">
              <div className="grid grid-cols-3 mt-10">
                <div className="bg-white rounded-lg m-2 p-2 w-12 h-12 flex items-center justify-center fade-in-up fade-delay-2">
                  <ReactIcon className="w-full h-full text-blue-500" />
                </div>
                <div className="bg-white rounded-lg m-2 p-2 w-12 h-12 flex items-center justify-center fade-in-up fade-delay-3">
                  <JSIcon className="w-full h-full" />
                </div>
                <div className="bg-white rounded-lg m-2 p-2 w-12 h-12 flex items-center justify-center fade-in-up fade-delay-4">
                  <PythonIcon className="w-full h-full" />
                </div>
                <div className="bg-white rounded-lg m-2 p-2 w-12 h-12 flex items-center justify-center fade-in-up fade-delay-1">
                  <HTMLIcon className="w-full h-full" />
                </div>
                <div className="bg-white rounded-lg m-2 p-2 w-12 h-12 flex items-center justify-center fade-in-up fade-delay-0">
                  <NodeIcon className="w-full h-full" />
                </div>
                <div className="bg-white rounded-lg m-2 p-2 w-12 h-12 flex items-center justify-center fade-in-up fade-delay-2">
                  <PHPIcon className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="mt-10 px-10 py-5 bg-[#6F43FB] mx-5 md:mx-15 rounded-xl shadow-md fade-in-up fade-delay-3">
        <p className="text-xl md:text-2xl font-semibold text-gray-100 my-6">
          I have a strong passion for learning in the IT field — I enjoy exploring new technologies, building practical projects, and continuously improving my skills to solve real-world problems.
        </p>
        <div className="flex items-center gap-3">
          <GoogleIcon className="w-12 h-12 text-white me-3" />
          <AWSIcon className="w-12 h-12 text-white me-3" />
          <HarvardIcon className="w-10 h-10 text-white me-3" />
        </div>
      </section>

      {/* what can I do */}
      <section className="flex flex-col md:flex-row items-start my-10 mx-15 fade-in-up fade-delay-4">
        <div className="max-w-[150px]">
          <h1 className="text-3xl text-gray-800 font-semibold">What can I do for you?</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 flex-1 mx-3 space-y-5">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-12 h-12 p-3 ms-0 md:ms-5 bg-gray-200 rounded-full flex items-center justify-center">
              <DesignIcon className="w-full h-full text-[#6F43FB]" />
            </div>
            <div className="ms-0 md:ms-10 flex-1">
              <p className="text-sm text-justify md:text-start text-gray-500 mt-2">
                I have hands-on experience designing intuitive and visually appealing user interfaces, focusing on user experience and usability. I enjoy turning ideas into engaging digital products that are both functional and aesthetically pleasing.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="w-12 h-12 p-3 ms-0 md:ms-5 bg-gray-200 rounded-full flex items-center justify-center">
              <WebsiteIcon className="w-full h-full text-[#6F43FB]" />
            </div>
            <div className="ms-0 md:ms-10 flex-1">
              <p className="text-sm text-justify md:text-start text-gray-500 mt-2">
                I am capable of building robust full-stack web applications, handling both frontend and backend development. My experience includes designing scalable architectures, integrating APIs, and deploying complete systems that deliver seamless user experiences.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="w-12 h-12 p-3 ms-0 md:ms-5 bg-gray-200 rounded-full flex items-center justify-center">
              <SolutionIcon className="w-full h-full text-[#6F43FB]" />
            </div>
            <div className="ms-0 md:ms-10 flex-1">
              <p className="text-sm text-justify md:text-start text-gray-500 mt-2">
                I am able to solve a variety of web platform challenges, from optimizing performance and security to implementing custom features and integrations. My problem-solving skills enable me to deliver effective solutions tailored to your business needs, ensuring reliable and scalable web platforms.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="w-12 h-12 p-3 ms-0 md:ms-5 bg-gray-200 rounded-full flex items-center justify-center">
              <InfrastructureIcon className="w-full h-full text-[#6F43FB]" />
            </div>
            <div className="ms-0 md:ms-10 flex-1">
              <p className="text-sm text-justify md:text-start text-gray-500 mt-2">
                I am experienced in setting up and managing infrastructure, including configuring VPS environments, deploying applications, and ensuring secure, scalable hosting solutions. I can help you establish a reliable foundation for your web projects, from initial setup to ongoing maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-10 grid grid-cols-1 md:grid-cols-2 mx-15 gap-5">
        <div className="bg-gray-200 rounded-lg flex flex-col px-10 py-5 min-h-fit md:min-h-[200px] w-full">
          <h1 className="text-gray-800 text-3xl">Wanna see <br /> my work?</h1>
          <a href="" className="bg-gray-800 text-white px-5 py-3 mt-10 mb-3 text-sm rounded-full shadow-md w-fit">Contact Me</a>
        </div>
        <div className="bg-gray-200 rounded-lg flex flex-col px-10 py-5 min-h-fit md:min-h-[200px] w-full">
          <PolyuIcon className="w-12 h-fit my-5 text-gray-800" />
          <p className="text-md text-gray-800 m-0">BEng (Hons) in Product Analysis and Engineering Design (Full-time)</p>
          <span className="text-gray-800 text-xs mt-3">2021 - 2025</span>
        </div>
        <div className="bg-gray-200 rounded-lg flex flex-col px-10 py-5 min-h-fit md:min-h-[200px] w-full">
          <GoogleIcon className="w-24 h-fit my-5 text-gray-800" />
          <p className="text-md text-gray-800 m-0">Google Cybersecurity (2025)</p>
          <a className="underline text-gray-800 text-xs mt-3 text-wrap" href="https://coursera.org/share/9947872b025d876b15c1ebd8cceca551">View Certificate</a>
        </div>
        <div className="bg-gray-200 rounded-lg flex flex-col px-10 py-5 min-h-fit md:min-h-[200px] w-full">
          <HarvardIcon className="w-12 h-fit my-5 text-gray-800" />
          <p className="text-md text-gray-800 m-0">CS50's Web Programming (2025)</p>
          <a className="underline text-gray-800 text-xs mt-3 text-wrap" href="https://cs50.harvard.edu/certificates/b5f57925-9a97-4d7e-8e30-b805e2e7934a">View Certificate</a>
        </div>
        <div className="bg-gray-200 rounded-lg flex flex-col px-10 py-5 min-h-fit md:min-h-[200px] w-full">
          <CEXIcon className="w-12 h-fit my-5 text-gray-800" />
          <p className="text-md text-gray-800 m-0">System Engineer</p>
          <span className="text-gray-800 text-xs mt-3">2022 - 2025</span>
        </div>
        <div className="bg-gray-200 rounded-lg flex flex-col px-10 py-5 min-h-fit md:min-h-[200px] w-full">
          <DivingKpopIcon className="w-10 h-fit my-5 text-gray-800" />
          <p className="text-md text-gray-800 m-0">Full-stack Developer</p>
          <a className="underline text-gray-800 text-xs mt-3 text-wrap" href="https://divingkpop.com">Visit Website</a>
        </div>
      </section>

      <footer className="bg-transparent m-3 px-5 py-4 rounded-xl text-gray-600 fade-in fade-delay-5">
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-0 md:justify-between">
          <div className="flex items-center gap-3">
        <a href="/" className="font-bold text-gray-800">KENKONG</a>
        <span className="hidden md:inline text-sm text-gray-500">Full‑Stack Developer</span>
          </div>

          <nav className="flex flex-col md:flex-row items-center gap-3 text-sm">
        <a href="#contact" className="hover:underline">Contact</a>
        <a href="/privacy" className="hover:underline">Privacy</a>
        <a href="/terms" className="hover:underline">Terms</a>
          </nav>

          <div className="text-sm text-gray-500">
        © {new Date().getFullYear()} Ken Kong. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
