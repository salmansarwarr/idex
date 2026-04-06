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
    Layers,
    Shield,
    Zap,
    Globe,
    Lock,
    BarChart,
    CheckCircle,
    ArrowRight,
    Puzzle,
} from "lucide-react";

const features = [
    {
        icon: Layers,
        title: "Unified Platform",
        description:
            "Single platform for all your customer experience and operations management needs.",
    },
    {
        icon: Zap,
        title: "High-Performance Processing",
        description:
            "Scalable architecture designed for high throughput and low-latency operations.",
    },
    {
        icon: Puzzle,
        title: "Easy Integration",
        description:
            "Connect with enterprise systems via pre-built connectors and APIs.",
    },
    {
        icon: BarChart,
        title: "Advanced Analytics",
        description:
            "Built-in analytics and reporting with customizable dashboards.",
    },
    {
        icon: Shield,
        title: "Enterprise Security",
        description:
            "Bank-level encryption, SOC 2 Type II, ISO 27001, and GDPR compliant.",
    },
    {
        icon: Globe,
        title: "Global Scalability",
        description:
            "Geo-distributed infrastructure capable of scaling across multiple regions.",
    },
];

const integrations = [
    "Salesforce",
    "Microsoft Dynamics",
    "SAP",
    "Oracle",
    "Zendesk",
    "ServiceNow",
    "Slack",
    "Teams",
    "AWS",
    "Azure",
    "Google Cloud",
    "Custom APIs",
];

export default function PlatformPage() {
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
                        <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/10 rounded-full mb-4 sm:mb-6">
                            <Layers className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                            <span className="text-xs sm:text-sm font-medium">
                                Enterprise Platform
                            </span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 px-2 sm:px-0">
                            One Platform. Infinite Possibilities.
                        </h1>
                        <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 px-4 sm:px-0">
                            Our enterprise-grade platform powers exceptional
                            customer experiences at scale with unmatched
                            reliability, security, and performance.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
                            <Link
                                href="/contact?demo=true"
                                className="w-full sm:w-auto"
                            >
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="bg-white text-brand-primary hover:bg-gray-100 w-full sm:w-auto"
                                >
                                    Request Demo
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="/contact" className="w-full sm:w-auto">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-white text-white hover:bg-white hover:text-brand-primary w-full sm:w-auto"
                                >
                                    Contact Sales
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
                            Platform Features
                        </motion.h2>
                        <motion.p
                            variants={staggerItem}
                            className="text-xl text-gray-600 max-w-3xl mx-auto"
                        >
                            Built for enterprise scale with the flexibility to
                            adapt to your unique business needs.
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

            {/* Security & Compliance */}
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
                                Security & Compliance First
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Enterprise-grade security and compliance built
                                into every layer of our platform.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "SOC 2 Type II Certified",
                                    "ISO 27001 Compliant",
                                    "GDPR & CCPA Ready",
                                    "HIPAA Compliant Options",
                                    "256-bit AES Encryption",
                                    "Multi-Factor Authentication",
                                    "Role-Based Access Control",
                                    "Regular Security Audits",
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start"
                                    >
                                        <CheckCircle className="w-6 h-6 text-brand-primary mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 text-lg">
                                            {item}
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
                                <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                                    <Lock className="w-8 h-8 text-brand-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-black mb-4">
                                    Premium Uptime SLA
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Our platform is built on redundant, globally
                                    distributed infrastructure to ensure maximum
                                    availability and reliability.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-700">
                                            Uptime
                                        </span>
                                        <span className="text-brand-primary font-bold">
                                            High Availability
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-brand-primary h-2 rounded-full"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                    <div className="pt-4 border-t border-gray-200">
                                        <p className="text-sm text-gray-600">
                                            <strong>24/7 Monitoring:</strong>{" "}
                                            Proactive monitoring and instant
                                            alerts ensure issues are resolved
                                            before they impact your business.
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Integrations */}
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
                            Seamless Integrations
                        </motion.h2>
                        <motion.p
                            variants={staggerItem}
                            className="text-xl text-gray-600 max-w-3xl mx-auto"
                        >
                            Connect with your existing tools and systems through
                            our extensive integration library.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                            {integrations.map((integration, index) => (
                                <Card
                                    key={index}
                                    padding="md"
                                    className="text-center hover:shadow-lg transition-shadow"
                                >
                                    <p className="font-semibold text-gray-700 text-sm sm:text-base">
                                        {integration}
                                    </p>
                                </Card>
                            ))}
                        </div>
                        <div className="text-center mt-12">
                            <p className="text-gray-600 mb-6">
                                Don't see your system? We offer custom
                                integration development.
                            </p>
                            <Link href="/contact">
                                <Button variant="outline" size="md">
                                    Request Custom Integration
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
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
                            Experience the Platform in Action
                        </h2>
                        <p className="text-xl mb-10 text-white/90">
                            Schedule a personalized demo to see how our platform
                            can transform your operations.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact?demo=true">
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="bg-white text-brand-primary hover:bg-gray-100"
                                >
                                    Schedule Demo
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-white text-white hover:bg-white hover:text-brand-primary"
                                >
                                    Contact Sales
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
