"use client"; // Use this for Next.js client-side rendering

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
 

export const LoadAnimation = ({
  children,
  className,
  delay = 0.2,
  reverse,
}) => {
  return (
    <motion.div
      className={cn("w-full h-full", className)}
      initial={{ opacity: 0, y: reverse ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: delay, duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};