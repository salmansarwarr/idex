"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

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
                    variants={staggerContainer}
                    className="text-center mb-16"
                >
                    <motion.div variants={staggerItem}>
                        <span className="text-brand-primary font-semibold text-sm uppercase tracking-wide mb-4 block">
                            Trusted By Industry Leaders
                        </span>
                    </motion.div>
                    <motion.h2
                        variants={staggerItem}
                        className="text-4xl md:text-5xl font-bold text-black mb-6"
                    >
                        Powering Success for Global Enterprises
                    </motion.h2>
                </motion.div>

                {/* Client Logos */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
                >
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItem}
                            className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                        >
                            <span className="text-2xl font-bold text-gray-400 group-hover:text-gray-600 transition-colors">
                                {client}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Testimonials */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItem}
                            className="bg-gray-50 rounded-xl p-8 relative"
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
