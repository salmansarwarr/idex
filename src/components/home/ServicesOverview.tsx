"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import { staggerContainer, staggerItem, staggerRotate } from "@/lib/animations";
import { Headphones, Code, Brain, ArrowRight } from "lucide-react";

const services = [
    {
        icon: Headphones,
        title: "Customer Experience & Support",
        description:
            "Deliver exceptional omnichannel support with our AI-powered customer experience solutions that enhance satisfaction and loyalty.",
        href: "/services/customer-experience",
        features: [
            "24/7 Omnichannel Support",
            "AI-Powered Automation",
            "Quality Assurance",
        ],
    },
    {
        icon: Code,
        title: "Digital & Technology Solutions",
        description:
            "Accelerate your digital transformation with modern technology solutions that streamline operations and drive innovation.",
        href: "/services/digital-solutions",
        features: ["Cloud Migration", "API Integration", "Custom Development"],
    },
    {
        icon: Brain,
        title: "AI & Analytics",
        description:
            "Harness the power of intelligent automation with data-driven insights and AI solutions to optimize business performance.",
        href: "/services/ai-analytics",
        features: [
            "Predictive Analytics",
            "Machine Learning",
            "Process Automation",
        ],
    },
];

export default function ServicesOverview() {
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
                    <motion.div variants={staggerItem} className="inline-block">
                        <span className="text-brand-primary font-semibold text-sm uppercase tracking-wide mb-4 block">
                            Our Services
                        </span>
                    </motion.div>
                    <motion.h2
                        variants={staggerItem}
                        className="text-4xl md:text-5xl font-bold text-black mb-6"
                    >
                        Enterprise Solutions That Drive Results
                    </motion.h2>
                    <motion.p
                        variants={staggerItem}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        Comprehensive technology and customer experience
                        services designed to transform your business operations
                        and exceed customer expectations.
                    </motion.p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div key={index} variants={staggerRotate}>
                                <Link href={service.href}>
                                    <Card
                                        variant="hover"
                                        padding="lg"
                                        className="h-full group border border-transparent hover:border-brand-primary/20"
                                    >
                                        {/* Icon with Magnetic Hover */}
                                        <motion.div
                                            className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors duration-300"
                                            whileHover={{
                                                scale: 1.15,
                                                rotate: [0, -10, 10, -10, 0],
                                                transition: {
                                                    duration: 0.5,
                                                },
                                            }}
                                        >
                                            <Icon className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors duration-300" />
                                        </motion.div>

                                        {/* Title */}
                                        <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-brand-primary transition-colors">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* Features */}
                                        <ul className="space-y-2 mb-6">
                                            {service.features.map(
                                                (feature, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-center text-sm text-gray-700"
                                                    >
                                                        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-3" />
                                                        {feature}
                                                    </li>
                                                ),
                                            )}
                                        </ul>

                                        {/* Learn More Link */}
                                        <div className="flex items-center text-brand-primary font-semibold group-hover:gap-2 transition-all">
                                            Learn More
                                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </Card>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
