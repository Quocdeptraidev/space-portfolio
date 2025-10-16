"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/sub/contact-contenr";
import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { SparklesIcon } from "@heroicons/react/24/solid";

import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/lib/motion";

export const Contact = () => {
    return (
        <section
            id="contact"
            className="flex flex-col items-center justify-center py-20 px-6 bg-transparent"
        >
            {/* Title */}
            <div className="flex flex-col items-center text-center gap-4">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box flex items-center justify-center py-[8px] px-[15px] border border-[#7042f88b] opacity-90 rounded-xl"
                >
                    <SparklesIcon className="text-[#b49bff] mr-3 h-6 w-6" />
                    <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        Contact Me
                    </h1>
                </motion.div>
            </div>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-300 text-center max-w-lg mb-10"
            >
                Have a question, collaboration idea, or just want to say hi?
                Feel free to drop a message below — I’ll get back to you as soon as I can!
            </motion.p>

            {/* Sub Component */}
            <ContactForm />
            {/* Contact Info with Icons */}
            <div className="mt-10 flex flex-col items-center gap-3 text-gray-300">
                <div className="flex items-center gap-3">
                    <MdEmail size={22} className="text-cyan-400" />
                    <a
                        href="mailto:yourname@gmail.com"
                        className="hover:text-cyan-400 transition"
                    >
                        nguyenvietq306@gmail.com
                    </a>
                </div>

                <div className="flex items-center gap-3">
                    <MdPhone size={22} className="text-cyan-400" />
                    <a
                        href="tel:+84987654321"
                        className="hover:text-cyan-400 transition"
                    >
                        0398755375
                    </a>
                </div>
            </div>

        </section>
    );
};
