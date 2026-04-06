"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { fadeIn, slideUp, glow } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
    return (
        <section className="section-padding bg-gradient-to-br from-brand-primary to-brand-primary-dark text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="max-w-4xl mx-auto text-center"
                >
                    <motion.h2
                        variants={slideUp}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Ready to Transform Your Business?
                    </motion.h2>
                    <motion.p
                        variants={slideUp}
                        transition={{ delay: 0.2 }}
                        className="text-xl mb-10 text-white/90"
                    >
                        Join the global enterprises who trust us to deliver
                        exceptional results. Let's discuss how we can help you
                        achieve your business goals.
                    </motion.p>
                    <motion.div
                        variants={slideUp}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link href="/contact">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="bg-white text-brand-primary hover:bg-gray-100 group"
                                >
                                    Get Started Today
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </motion.div>
                        </Link>
                        <Link href="/contact?demo=true">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                animate={{
                                    boxShadow: [
                                        "0 0 0px rgba(255, 255, 255, 0)",
                                        "0 0 20px rgba(255, 255, 255, 0.3)",
                                        "0 0 0px rgba(255, 255, 255, 0)",
                                    ],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-white text-white hover:bg-white hover:text-brand-primary"
                                >
                                    Schedule a Demo
                                </Button>
                            </motion.div>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </section>
    );
}
