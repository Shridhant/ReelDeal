"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-purple-500/10" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="flex items-center justify-center rounded-3xl  w-fit mx-auto gap-2 mb-8">
            {" "}
            <Sparkles className="w-6 h-6 text-indigo-400" />{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text font-medium">
              {" "}
              Powered by Advanced AI{" "}
            </span>{" "}
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
            Create Engaging Content
            <br />
            <span className="text-indigo-400">in Seconds</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Generate captions, scripts, and comments optimized for any platform.
            Save time and boost engagement with AI-powered content creation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/home">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-indigo-500 rounded-lg font-medium gap-2 flex mx-auto hover:bg-indigo-600 transition-colors"
              >
                Start Creating
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            ["1K+", "Content Pieces"],
            ["100+", "Happy Users"],
            ["10+", "Platforms"],
            ["24/7", "AI Support"],
          ].map(([stat, label]) => (
            <div key={label}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat}
              </div>
              <div className="text-gray-400">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
