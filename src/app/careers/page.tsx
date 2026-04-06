"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import {
    fadeIn,
    slideUp,
    staggerContainer,
    staggerItem,
} from "@/lib/animations";
import {
    Users,
    Heart,
    TrendingUp,
    Globe,
    Award,
    Briefcase,
    ArrowRight,
} from "lucide-react";

const values = [
    {
        icon: Users,
        title: "Collaborative Culture",
        description:
            "Work with talented professionals from around the world in a supportive environment.",
    },
    {
        icon: TrendingUp,
        title: "Career Growth",
        description:
            "Continuous learning opportunities and clear paths for advancement.",
    },
    {
        icon: Globe,
        title: "Global Impact",
        description:
            "Make a difference by working on projects that impact millions of users.",
    },
    {
        icon: Award,
        title: "Recognition",
        description:
            "Your contributions are valued and rewarded through our recognition programs.",
    },
];

const benefits = [
    "Competitive salary and performance bonuses",
    "Comprehensive health insurance",
    "Flexible work arrangements",
    "Professional development budget",
    "Generous PTO and holidays",
    "401(k) matching",
    "Wellness programs",
    "Team building events",
];

const openPositions: any[] = [];

export default function CareersPage() {
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
                            Join Our Global Team
                        </h1>
                        <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 px-4 sm:px-0">
                            Build your career with a company that values
                            innovation, collaboration, and making a real impact
                            on businesses worldwide.
                        </p>
                        <Button
                            variant="secondary"
                            size="lg"
                            className="bg-white text-brand-primary hover:bg-gray-100 w-full sm:w-auto"
                            onClick={() => {
                                document
                                    .getElementById("open-positions")
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            View Open Positions
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Culture Section */}
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
                            Why Work With Us
                        </motion.h2>
                        <motion.p
                            variants={staggerItem}
                            className="text-xl text-gray-600 max-w-3xl mx-auto"
                        >
                            We're building the future of enterprise technology,
                            and we want passionate, talented people to join us
                            on this journey.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <motion.div key={index} variants={staggerItem}>
                                    <Card
                                        padding="lg"
                                        className="h-full text-center"
                                    >
                                        <div className="w-14 h-14 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-5 mx-auto">
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

            {/* Benefits Section */}
            <section className="section-padding bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideUp}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                                Comprehensive Benefits Package
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                We invest in our people with competitive
                                compensation and benefits that support your
                                health, growth, and well-being.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                {benefits.map((benefit, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start"
                                    >
                                        <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-brand-primary mr-2 sm:mr-3 flex-shrink-0 mt-1" />
                                        <span className="text-sm sm:text-base text-gray-700">
                                            {benefit}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideUp}
                            transition={{ delay: 0.2 }}
                            className="space-y-6"
                        >
                            <Card padding="lg" className="bg-white">
                                <h3 className="text-2xl font-bold text-black mb-4">
                                    Our Team
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-700">
                                            Core Team
                                        </span>
                                        <span className="text-brand-primary font-bold text-2xl">
                                            10+
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-700">
                                            Working Style
                                        </span>
                                        <span className="text-brand-primary font-bold text-2xl">
                                            Remote-First
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-700">
                                            Culture
                                        </span>
                                        <span className="text-brand-primary font-bold text-2xl">
                                            Collaborative
                                        </span>
                                    </div>
                                </div>
                            </Card>

                            <Card
                                padding="lg"
                                className="bg-gradient-to-br from-brand-primary to-brand-primary-dark text-white"
                            >
                                <h3 className="text-2xl font-bold mb-4">
                                    Join Our Journey
                                </h3>
                                <div className="text-5xl font-bold mb-2">
                                    100%
                                </div>
                                <p className="text-white/90">
                                    Commitment to innovation and employee
                                    well-being from day one
                                </p>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section id="open-positions" className="section-padding">
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
                            Open Positions
                        </motion.h2>
                        <motion.p
                            variants={staggerItem}
                            className="text-xl text-gray-600 max-w-3xl mx-auto"
                        >
                            Explore opportunities across our global offices and
                            remote positions.
                        </motion.p>
                    </motion.div>

                    {openPositions.length > 0 ? (
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="max-w-5xl mx-auto space-y-4"
                        >
                            {openPositions.map((position, index) => (
                                <motion.div key={index} variants={staggerItem}>
                                    <Card
                                        padding="lg"
                                        variant="hover"
                                        className="cursor-pointer group"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-brand-primary transition-colors">
                                                    {position.title}
                                                </h3>
                                                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                                    <div className="flex items-center">
                                                        <Briefcase className="w-4 h-4 mr-2" />
                                                        {position.department}
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Globe className="w-4 h-4 mr-2" />
                                                        {position.location}
                                                    </div>
                                                    <div className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">
                                                        {position.type}
                                                    </div>
                                                </div>
                                            </div>
                                            <Link href="/contact">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                >
                                                    Apply Now
                                                    <ArrowRight className="ml-2 w-4 h-4" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <div className="text-center py-16 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 max-w-3xl mx-auto">
                            <p className="text-gray-500 text-xl font-medium mb-2">
                                No open positions at the moment.
                            </p>
                            <p className="text-gray-400">
                                We're always looking for talent. Check back soon
                                or send us your resume.
                            </p>
                        </div>
                    )}

                    <div className="text-center mt-12">
                        <p className="text-gray-600 mb-6">
                            Don't see the right position? We're always looking
                            for talented people.
                        </p>
                        <Link href="/contact">
                            <Button variant="primary" size="md">
                                Send Us Your Resume
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
