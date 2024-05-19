"use client";
import { motion, MotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";

type BlockProps = {
  className?: string;
} & MotionProps;

export default function Block({ className, ...rest }: BlockProps) {
  return (
    <motion.div
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
}
