import Block from "./Block";

const AboutBlock = () => {
  return (
    <Block className="col-span-12 text-3xl leading-snug">
      <p>My passion is building beautiful UIs. </p>
      <span className="text-zinc-400">
        My tech stack is React, Next, Tailwind CSS, Framer Motion and GSAP.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam,
        excepturi.
      </span>
    </Block>
  );
};

export default AboutBlock;
