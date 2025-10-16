"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/lib/motion";

export const HomeContent = () => {
    const texts = ["Fullstack Java Developer", "Spring Boot | React JS"];
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = texts[index];
        if (isDeleting) {
            if (displayText.length > 0) {
                const timeout = setTimeout(() => {
                    setDisplayText(current.substring(0, displayText.length - 1));
                }, 50); // Tốc độ xóa
                return () => clearTimeout(timeout);
            } else {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % texts.length);
            }
        } else {
            if (displayText.length < current.length) {
                const timeout = setTimeout(() => {
                    setDisplayText((prev) => prev + current[displayText.length]);
                }, 80); // Tốc độ gõ
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, 2000); // Thời gian chờ trước khi xóa
                return () => clearTimeout(timeout);
            }
        }
    }, [displayText, isDeleting, index, texts]);

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">

                <motion.div
                    variants={slideInFromRight(0.5)}
                    className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px]"
                >
                    <span>
                        Hello,{" "}
                        <span>I&apos;m</span>{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            Nguyen Viet Quoc.
                        </span>
                    </span>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] rounded-lg bg-[#1a1a2e]/40 backdrop-blur-md flex items-center gap-2 hover:border-[#9a6eff] transition-colors duration-300"
                >
                    <SparklesIcon className="text-[#b49bff] h-5 w-5 animate-pulse" />
                    <motion.h1
                        key={displayText} // Giúp framer motion nhận biết khi text đổi
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="Welcome-text text-[20px] text-white tracking-wide font-medium"
                    >
                        {displayText}
                        <motion.span
                            className="inline-block w-[6px] h-[16px] bg-[#b49bff] ml-[2px]"
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        />
                    </motion.h1>
                </motion.div>
            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex justify-center items-center"
            >
                <Image
                    src="/hero-bg.svg"
                    alt="work icons"
                    height={650}
                    width={650}
                    draggable={false}
                    className="select-none"
                />
            </motion.div>
        </motion.div>
    );
};