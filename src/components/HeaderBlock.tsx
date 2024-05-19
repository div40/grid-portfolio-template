import { FiArrowRight } from "react-icons/fi";
import Block from "./Block";

const HeaderBlock = () => {
  return (
    <Block className="col-span-12 row-span-2 md:col-span-6">
      <img
        src={"https://api.dicebear.com/8.x/lorelei-neutral/svg"}
        alt="avatar"
        className="mb-4 size-16 rounded-full"
      />
      <h1 className="mb-12 text-3xl font-medium leading-tight">
        Hi! I am Jim.{" "}
        <span className="text-zinc-400">
          I like to build cool stuff like this.
        </span>
      </h1>
      <a
        href="#"
        className="flex items-center gap-1 text-red-300 hover:underline"
      >
        Connect with me <FiArrowRight />
      </a>
    </Block>
  );
};

export default HeaderBlock;
