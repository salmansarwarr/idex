"use client";

import React from "react";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import {
    staggerContainer,
    staggerItem,
    bounceIn,
    pulse,
} from "@/lib/animations";
import { Globe, Shield, TrendingUp, Clock, Zap, Award } from "lucide-react";

const features = [
    {
        icon: Globe,
        title: "Global Vision, Local Approach",
        description:
            "Building a global network with deep local market understanding and cultural resonance.",
    },
    {
        icon: Shield,
        title: "Enterprise-Grade Security",
        description:
            "SOC 2, ISO 27001 certified with bank-level data protection and compliance.",
    },
    {
        icon: TrendingUp,
        title: "Focus on Results",
        description:
            "Dedicated to delivering measurable business impact and long-term success.",
    },
    {
        icon: Clock,
        title: "24/7 Support",
        description:
            "Round-the-clock monitoring and support across all time zones.",
    },
    {
        icon: Zap,
        title: "Scalable Solutions",
        description:
            "Flexible infrastructure that grows with your business needs.",
    },
    {
        icon: Award,
        title: "Innovation First",
        description:
            "Continuous investment in cutting-edge technology and R&D.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="section-padding bg-gray-50">
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
                            Why Choose Us
                        </span>
                    </motion.div>
                    <motion.h2
                        variants={staggerItem}
                        className="text-4xl md:text-5xl font-bold text-black mb-6"
                    >
                        Your Trusted Partner for Digital Excellence
                    </motion.h2>
                    <motion.p
                        variants={staggerItem}
                        className="text-xl text-gray-600 max-w-3xl mx-auto"
                    >
                        We combine innovative solutions with deep dedication to
                        deliver exceptional results that drive your business
                        forward.
                    </motion.p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div key={index} variants={bounceIn}>
                                <Card padding="lg" className="h-full">
                                    {/* Icon with Pulse Animation */}
                                    <motion.div
                                        className="w-14 h-14 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-5"
                                        initial="initial"
                                        animate="animate"
                                        variants={pulse}
                                        whileHover={{
                                            scale: 1.2,
                                            rotate: 360,
                                            transition: { duration: 0.5 },
                                        }}
                                    >
                                        <Icon className="w-7 h-7 text-brand-primary" />
                                    </motion.div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-black mb-3">
                                        {feature.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
