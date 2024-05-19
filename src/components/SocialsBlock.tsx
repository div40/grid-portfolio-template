import { SiDribbble, SiGithub, SiLinkedin, SiYoutube } from "react-icons/si";
import Block from "./Block";

const SocialsBlock = () => {
  return (
    <>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-red-600 md:col-span-3"
      >
        <a
          href="#"
          className="grid place-items-center h-full text-3xl text-white"
        >
          <SiYoutube />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-pink-400 md:col-span-3"
      >
        <a
          href="#"
          className="grid place-items-center h-full text-3xl text-white"
        >
          <SiDribbble />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-zinc-50 md:col-span-3"
      >
        <a
          href="#"
          className="grid place-items-center h-full text-3xl text-black"
        >
          <SiGithub />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="col-span-6 bg-blue-600 md:col-span-3"
      >
        <a
          href="#"
          className="grid place-items-center h-full text-3xl text-white"
        >
          <SiLinkedin />
        </a>
      </Block>
    </>
  );
};

export default SocialsBlock;
