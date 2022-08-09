import { BiCodeBlock } from "react-icons/bi";

export default function Hero() {
  return (
    <div className="bg-transparent my-10 mx-10 flex flex-col justify-center content-center">
      <p class="font-mono text-white font-medium text-l">Hi, my name is</p>
      <p class="font-extrabold text-purple-400 mb-5 font-sans text-8xl">
        Eric Dam
      </p>
      <p className="text-xl text-white mb-10">
        I am a full-stack developer who likes coding and eating rice. 🍚
      </p>
      <button class="flex w-fit h-fit gap-2 rounded-lg font-medium bg-purple-500 p-4 text-xl text-white">
        <BiCodeBlock size={28}></BiCodeBlock>
        View my resume
      </button>
    </div>
  );
}
