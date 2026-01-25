"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { fadeIn, slideUp } from "@/lib/animations";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, #8B0000 1px, transparent 0)`,
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-24 md:py-32 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="inline-flex items-center px-3 sm:px-4 py-2 bg-brand-primary/10 rounded-full mb-6 sm:mb-8"
                    >
                        <span className="w-2 h-2 bg-brand-primary rounded-full mr-2 animate-pulse" />
                        <span className="text-xs sm:text-sm font-medium text-brand-primary">
                            Trusted by 500+ Global Enterprises
                        </span>
                    </motion.div>

                    {/* Headline with Word-by-Word Reveal */}
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.08,
                                    delayChildren: 0.1,
                                },
                            },
                        }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4 sm:mb-6 leading-tight px-2 sm:px-0"
                    >
                        {["Transform", "Customer", "Experience", "with"].map(
                            (word, index) => (
                                <motion.span
                                    key={index}
                                    variants={{
                                        hidden: {
                                            opacity: 0,
                                            y: 30,
                                            filter: "blur(10px)",
                                        },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            filter: "blur(0px)",
                                            transition: {
                                                duration: 0.6,
                                                ease: [0.22, 1, 0.36, 1],
                                            },
                                        },
                                    }}
                                    className="inline-block mr-3 sm:mr-4"
                                >
                                    {word}
                                </motion.span>
                            ),
                        )}
                        <br className="hidden sm:block" />
                        {["Enterprise-Grade", "Solutions"].map(
                            (word, index) => (
                                <motion.span
                                    key={index + 4}
                                    variants={{
                                        hidden: {
                                            opacity: 0,
                                            y: 30,
                                            filter: "blur(10px)",
                                        },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            filter: "blur(0px)",
                                            transition: {
                                                duration: 0.6,
                                                ease: [0.22, 1, 0.36, 1],
                                            },
                                        },
                                    }}
                                    className={`inline-block mr-3 sm:mr-4 ${
                                        index === 0 ? "text-brand-primary" : ""
                                    }`}
                                >
                                    {word}
                                </motion.span>
                            ),
                        )}
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={slideUp}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
                    >
                        We deliver cutting-edge technology solutions and
                        world-class customer experience services that drive
                        growth, efficiency, and customer satisfaction for
                        enterprise organizations worldwide.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={slideUp}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-14 md:mb-16 px-4 sm:px-0"
                    >
                        <Link href="/contact" className="w-full sm:w-auto">
                            <Button
                                variant="primary"
                                size="lg"
                                className="group w-full sm:w-auto"
                            >
                                Contact Sales
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link
                            href="/contact?demo=true"
                            className="w-full sm:w-auto"
                        >
                            <Button
                                variant="outline"
                                size="lg"
                                className="group w-full sm:w-auto"
                            >
                                <Play className="mr-2 w-5 h-5" />
                                Request Demo
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Trust Indicators with Enhanced Animations */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1,
                                    delayChildren: 0.6,
                                },
                            },
                        }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto px-4 sm:px-0"
                    >
                        {[
                            { value: "500+", label: "Enterprise Clients" },
                            { value: "20+", label: "Countries" },
                            { value: "98%", label: "Client Satisfaction" },
                            { value: "24/7", label: "Global Support" },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        scale: 0.3,
                                        y: 50,
                                    },
                                    visible: {
                                        opacity: 1,
                                        scale: 1,
                                        y: 0,
                                        transition: {
                                            type: "spring",
                                            damping: 12,
                                            stiffness: 100,
                                        },
                                    },
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.2 },
                                }}
                                className="text-center cursor-default"
                            >
                                <motion.div
                                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary mb-1 sm:mb-2"
                                    whileHover={{
                                        scale: 1.2,
                                        transition: { duration: 0.2 },
                                    }}
                                >
                                    {stat.value}
                                </motion.div>
                                <div className="text-xs sm:text-sm text-gray-600">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-brand-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-64 h-64 sm:w-96 sm:h-96 bg-brand-primary/5 rounded-full blur-3xl" />
        </section>
    );
}
