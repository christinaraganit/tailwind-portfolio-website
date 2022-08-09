import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaComments } from "react-icons/fa";

export default function About() {
  return (
    <div id="about" className="py-10 px-10 text-l bg-transparent ">
      <p class="font-extrabold text-purple-400 mb-5 font-sans text-4xl">
        About me
      </p>
      <p class="font-extrabold text-purple-200 mb-5 font-sans text-2xl">
        Hi, I'm Eric 👋
      </p>
      <p className="text-white mb-5">
        I am a full-stack developer who likes finding solutions to real-world
        problems. My tech stack primarily involves Java, React, HTML/CSS, and
        JavaScript.
      </p>
      <p className="text-white mb-10">
        I recently graduated from British Columbia Institute of Technology's
        Computer Systems Technology program in May 2021 and am seeking a
        position as a full-stack developer or software developer.
      </p>

      <p className="font-extrabold text-purple-200 mb-5 font-sans text-2xl">
        Technologies 💻
      </p>

      <ol className="list-disc text-l px-10 font-normal text-white mb-10">
        <li>Java</li>
        <li>React</li>
        <li>C#</li>
        <li>C++</li>
        <li>C</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Python</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>Google Firebase</li>
        <li>Docker</li>
        <li>.NET</li>
        <li>Django</li>
        <li>NodeJS</li>
        <li>Angular</li>
      </ol>

      <p className="text-l text-white mb-5">
        I am currently looking to make new connections and expand my network.
        Please feel free to reach out to me through any of the platforms below.
        🤝
      </p>

      <div id="about-buttons" className="flex gap-4">
        <a
          href="#"
          className="w-fit h-fit rounded-full bg-zinc-800 p-4 border border border-zinc-700"
        >
          <FaGithub className="text-purple-200" size={24}></FaGithub>
        </a>

        <a
          href="#"
          className="w-fit h-fit rounded-full bg-zinc-800 p-4 border border border-zinc-700"
        >
          <FaLinkedinIn className="text-purple-200" size={24}></FaLinkedinIn>
        </a>

        <a
          href="#"
          className="w-fit h-fit rounded-full bg-zinc-800 p-4 border border border-zinc-700"
        >
          <FaEnvelopeOpen
            className="text-purple-200"
            size={24}
          ></FaEnvelopeOpen>
        </a>
      </div>
    </div>
  );
}
