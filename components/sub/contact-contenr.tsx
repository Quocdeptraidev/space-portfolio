"use client";

import { motion } from "framer-motion";

export const ContactForm = () => {
    return (
        <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md bg-[#0e0e2c]/70 border border-[#2A0E61] rounded-2xl p-6 flex flex-col gap-4 shadow-lg"
            onSubmit={(e) => e.preventDefault()}
        >
            <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-lg bg-[#1a1a40] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
            />
            <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-lg bg-[#1a1a40] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
            />
            <textarea
                rows={4}
                placeholder="Your Message"
                className="p-3 rounded-lg bg-[#1a1a40] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                required
            />
            <button
                type="submit"
                className="mt-2 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition"
            >
                Send Message
            </button>
        </motion.form>
    );
};
