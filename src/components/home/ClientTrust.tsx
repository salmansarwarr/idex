"use client";

import React from "react";
import { motion } from "framer-motion";
import { scatterContainer, scatterItem, bounceIn } from "@/lib/animations";

const clients = [
    "Microsoft",
    "Amazon",
    "Google",
    "Apple",
    "Meta",
    "Netflix",
    "Tesla",
    "Adobe",
];

const testimonials = [
    {
        quote: "Enterprise has transformed our customer experience operations. Their AI-powered solutions have increased our satisfaction scores by 35% while reducing costs.",
        author: "Sarah Johnson",
        role: "VP of Customer Experience",
        company: "Fortune 500 Tech Company",
    },
    {
        quote: "The level of expertise and professionalism is unmatched. They've been instrumental in our digital transformation journey.",
        author: "Michael Chen",
        role: "Chief Technology Officer",
        company: "Global Financial Services",
    },
    {
        quote: "Working with Enterprise has been a game-changer. Their scalable solutions have supported our rapid growth across multiple markets.",
        author: "Emily Rodriguez",
        role: "Head of Operations",
        company: "E-commerce Leader",
    },
];

export default function ClientTrust() {
    return (
        <section className="section-padding bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.2,
                            },
                        },
                    }}
                    className="text-center mb-16"
                >
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.5 },
                            },
                        }}
                    >
                        <span className="text-brand-primary font-semibold text-sm uppercase tracking-wide mb-4 block">
                            Trusted By Industry Leaders
                        </span>
                    </motion.div>
                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.5 },
                            },
                        }}
                        className="text-4xl md:text-5xl font-bold text-black mb-6"
                    >
                        Powering Success for Global Enterprises
                    </motion.h2>
                </motion.div>

                {/* Client Logos with Scatter Animation */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={scatterContainer}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
                >
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            variants={scatterItem}
                            whileHover={{
                                scale: 1.1,
                                rotate: [0, -5, 5, 0],
                                transition: { duration: 0.3 },
                            }}
                            className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group cursor-pointer"
                        >
                            <span className="text-2xl font-bold text-gray-400 group-hover:text-gray-600 transition-colors">
                                {client}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Testimonials with Bounce Animation */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.2,
                            },
                        },
                    }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={bounceIn}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                transition: { duration: 0.3 },
                            }}
                            className="bg-gray-50 rounded-xl p-8 relative cursor-pointer"
                        >
                            {/* Quote Icon */}
                            <div className="text-brand-primary text-6xl font-serif mb-4 opacity-20">
                                "
                            </div>

                            {/* Quote */}
                            <p className="text-gray-700 mb-6 leading-relaxed italic">
                                {testimonial.quote}
                            </p>

                            {/* Author */}
                            <div className="border-t border-gray-200 pt-4">
                                <p className="font-bold text-black">
                                    {testimonial.author}
                                </p>
                                <p className="text-sm text-gray-600">
                                    {testimonial.role}
                                </p>
                                <p className="text-sm text-brand-primary font-medium">
                                    {testimonial.company}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
