"use client";
import AboutBlock from "./AboutBlock";
import HeaderBlock from "./HeaderBlock";
import LocationBlock from "./LocationBlock";
import Logo from "./Logo";
import MessageListBlock from "./MessageListBlock";
import SocialsBlock from "./SocialsBlock";
import { motion } from "framer-motion";

function Bento() {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-8 text-zinc-50">
      <Logo />
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4 text-balance"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <MessageListBlock />
      </motion.div>
    </div>
  );
}

export default Bento;
