import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import image from "@/public/Images/8.png";

type Props = {};

export default function Section7({}: Props) {
  return (
    <div className="flex font-Zen overflow-hidden sm:text-xl font-medium relative flex-col items-center max-w-[1200px] mx-auto justify-start gap-y-12 py-12 w-full text-center">
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          type: "spring",
          damping: 15,
          stiffness: 50,
          delay: 0.3,
        }}
        className="aspect-square w-full py-16 relative"
      >
        <motion.div
          viewport={{ once: true }}
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{
            duration: 0.4,
            type: "spring",
            damping: 15,
            stiffness: 50,
            delay: 0.3,
          }}
          className="w-full absolute top-0"
        >
          <h1 className="uppercase truncate font-normal absolute py-8 text-teal-950 font-Mont -translate-x-1/2 z-10 top-0 left-1/2">
            One grand okinawa
          </h1>
        </motion.div>
        <Image
          src={image}
          alt={"background"}
          fill
          className="object-cover w-full h-full z-0"
        />
      </motion.div>
    </div>
  );
}