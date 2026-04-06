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
    Code,
    Cloud,
    Smartphone,
    Database,
    Zap,
    Lock,
    CheckCircle,
    ArrowRight,
} from "lucide-react";

const features = [
    {
        icon: Cloud,
        title: "Cloud Migration & Management",
        description:
            "Seamless migration to cloud infrastructure with ongoing optimization and management.",
    },
    {
        icon: Code,
        title: "Custom Software Development",
        description:
            "Tailored applications built to your exact specifications and business requirements.",
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description:
            "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
        icon: Database,
        title: "API Integration & Development",
        description:
            "Connect your systems with robust, scalable API solutions and integrations.",
    },
    {
        icon: Zap,
        title: "Process Automation",
        description:
            "Streamline operations with intelligent automation and workflow optimization.",
    },
    {
        icon: Lock,
        title: "Cybersecurity Solutions",
        description:
            "Enterprise-grade security measures to protect your digital assets.",
    },
];

const benefits = [
    "Accelerate time-to-market",
    "Reduce infrastructure costs",
    "Improve system reliability and uptime",
    "Scale seamlessly with business growth",
    "Enhance security and compliance",
    "Access cutting-edge technology expertise",
];

const technologies = [
    "AWS, Azure, Google Cloud",
    "React, Next.js, Node.js",
    "Python, Java, .NET",
    "Kubernetes, Docker",
    "PostgreSQL, MongoDB",
    "GraphQL, REST APIs",
];

export default function DigitalSolutionsPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-brand-primary to-brand-primary-dark text-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6">
                            <Code className="w-5 h-5 mr-2" />
                            <span className="text-sm font-medium">
                                Digital & Technology Solutions
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Accelerate Your Digital Transformation
                        </h1>
                        <p className="text-xl text-white/90 mb-8">
                            Modern technology solutions that streamline
                            operations, drive innovation, and position your
                            business for the future.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact">
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="bg-white text-brand-primary hover:bg-gray-100"
                                >
                                    Get Started
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="/contact?demo=true">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-white text-white hover:bg-white hover:text-brand-primary"
                                >
                                    Request Demo
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
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
                            Comprehensive Technology Services
                        </motion.h2>
                        <motion.p
                            variants={staggerItem}
                            className="text-xl text-gray-600 max-w-3xl mx-auto"
                        >
                            End-to-end digital solutions designed to transform
                            your business operations and drive sustainable
                            growth.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div key={index} variants={staggerItem}>
                                    <Card padding="lg" className="h-full">
                                        <div className="w-14 h-14 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-5">
                                            <Icon className="w-7 h-7 text-brand-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold text-black mb-3">
                                            {feature.title}
                                        </h3>
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

            {/* Benefits & Technologies Section */}
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
                                Drive Innovation & Efficiency
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Our digital solutions empower enterprises to
                                modernize operations, reduce costs, and stay
                                ahead of the competition.
                            </p>
                            <ul className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start"
                                    >
                                        <CheckCircle className="w-6 h-6 text-brand-primary mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 text-lg">
                                            {benefit}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideUp}
                            transition={{ delay: 0.2 }}
                        >
                            <Card padding="lg" className="bg-white">
                                <h3 className="text-2xl font-bold text-black mb-6">
                                    Technology Stack
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    We leverage industry-leading technologies to
                                    build robust, scalable solutions:
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {technologies.map((tech, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center space-x-2 text-gray-700"
                                        >
                                            <div className="w-2 h-2 bg-brand-primary rounded-full" />
                                            <span className="text-sm">
                                                {tech}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-8 border-t border-gray-200">
                                    <h4 className="font-bold text-black mb-4">
                                        Implementation Process
                                    </h4>
                                    <div className="space-y-3">
                                        {[
                                            "Discovery & Requirements Analysis",
                                            "Architecture & Design",
                                            "Agile Development & Testing",
                                            "Deployment & Integration",
                                            "Ongoing Support & Optimization",
                                        ].map((step, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center space-x-3"
                                            >
                                                <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                                    {index + 1}
                                                </div>
                                                <span className="text-gray-700">
                                                    {step}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-brand-primary to-brand-primary-dark text-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Transform Your Technology?
                        </h2>
                        <p className="text-xl mb-10 text-white/90">
                            Let's discuss how our digital solutions can
                            accelerate your business growth and innovation.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact">
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="bg-white text-brand-primary hover:bg-gray-100"
                                >
                                    Contact Sales
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="/contact?demo=true">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-white text-white hover:bg-white hover:text-brand-primary"
                                >
                                    Schedule a Demo
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
