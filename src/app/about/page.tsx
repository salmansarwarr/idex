"use client";

import React from "react";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import {
    fadeIn,
    slideUp,
    staggerContainer,
    staggerItem,
} from "@/lib/animations";
import { Globe, Users, Target, Award, TrendingUp, Heart } from "lucide-react";

const values = [
    {
        icon: Target,
        title: "Customer First",
        description:
            "We put our clients and their customers at the center of everything we do.",
    },
    {
        icon: TrendingUp,
        title: "Innovation",
        description:
            "Continuously pushing boundaries with cutting-edge technology and creative solutions.",
    },
    {
        icon: Heart,
        title: "Integrity",
        description:
            "Building trust through transparency, honesty, and ethical business practices.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description:
            "Fostering teamwork and partnerships to achieve extraordinary results.",
    },
    {
        icon: Award,
        title: "Excellence",
        description:
            "Committed to delivering the highest quality in every interaction and solution.",
    },
    {
        icon: Globe,
        title: "Global Impact",
        description:
            "Making a positive difference in communities worldwide through our services.",
    },
];

const stats = [
    { value: "Upcoming", label: "Founded" },
    { value: "Expert", label: "Team Members" },
    { value: "Remote", label: "First Operations" },
    { value: "Startup", label: "Organization Stage" },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-brand-primary to-brand-primary-dark text-white py-16 sm:py-20">
                <div className="container mx-auto px-4 sm:px-6">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 px-2 sm:px-0">
                            Building the Future of Digital Experience
                        </h1>
                        <p className="text-lg sm:text-xl text-white/90 px-4 sm:px-0">
                            We are a global leader in customer experience and
                            technology solutions, dedicated to helping
                            enterprises achieve exceptional results through
                            innovation and excellence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideUp}
                        >
                            <Card padding="lg" className="h-full">
                                <h2 className="text-3xl font-bold text-black mb-4">
                                    Our Mission
                                </h2>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    To empower global enterprises with
                                    innovative technology solutions and
                                    exceptional customer experience services
                                    that drive sustainable growth, operational
                                    excellence, and lasting customer
                                    relationships.
                                </p>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideUp}
                            transition={{ delay: 0.2 }}
                        >
                            <Card padding="lg" className="h-full">
                                <h2 className="text-3xl font-bold text-black mb-4">
                                    Our Vision
                                </h2>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    To be the world's most trusted partner for
                                    digital transformation, recognized for our
                                    innovation, integrity, and unwavering
                                    commitment to client success across every
                                    industry and market we serve.
                                </p>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Company Stats */}
            <section className="section-padding bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                                className="text-center"
                            >
                                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-primary mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm sm:text-base text-gray-600 font-medium">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section-padding">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="text-center mb-16"
                    >
                        <motion.h2
                            variants={staggerItem}
                            className="text-4xl md:text-5xl font-bold text-black mb-6"
                        >
                            Our Core Values
                        </motion.h2>
                        <motion.p
                            variants={staggerItem}
                            className="text-xl text-gray-600 max-w-3xl mx-auto"
                        >
                            The principles that guide our actions and define who
                            we are as an organization.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <motion.div key={index} variants={staggerItem}>
                                    <Card padding="lg" className="h-full">
                                        <div className="w-14 h-14 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-5">
                                            <Icon className="w-7 h-7 text-brand-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold text-black mb-3">
                                            {value.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {value.description}
                                        </p>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Global Presence */}
            <section className="section-padding bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                            Global Presence, Local Expertise
                        </h2>
                        <p className="text-xl text-gray-600 mb-12">
                            With a vision to scale worldwide, we are starting
                            with a dedicated team focused on delivering
                            exceptional results for our first partners.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                            <Card padding="lg">
                                <h3 className="text-xl font-bold text-black mb-3">
                                    Our Headquarters
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Operating from our central hub as we scale
                                    our remote-first organization.
                                </p>
                                <p className="text-sm text-brand-primary font-medium">
                                    New York • Core Team
                                </p>
                            </Card>

                            <Card padding="lg">
                                <h3 className="text-xl font-bold text-black mb-3">
                                    Global Vision
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Planning expansion into EMEA and APAC
                                    markets with local talent and expertise.
                                </p>
                                <p className="text-sm text-brand-primary font-medium">
                                    Remote-First • Growing Team
                                </p>
                            </Card>

                            <Card padding="lg">
                                <h3 className="text-xl font-bold text-black mb-3">
                                    Partnerships
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Actively seeking early partners to join us
                                    in shaping the future of enterprise tech.
                                </p>
                                <p className="text-sm text-brand-primary font-medium">
                                    24/7 Operations • Dedicated Support
                                </p>
                            </Card>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
