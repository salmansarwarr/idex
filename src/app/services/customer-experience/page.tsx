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
    Headphones,
    MessageSquare,
    BarChart,
    Shield,
    Clock,
    Globe,
    CheckCircle,
    ArrowRight,
} from "lucide-react";

const features = [
    {
        icon: MessageSquare,
        title: "Omnichannel Support",
        description:
            "Seamless customer interactions across voice, chat, email, and social media.",
    },
    {
        icon: BarChart,
        title: "Real-Time Analytics",
        description:
            "Comprehensive dashboards and insights to monitor performance and quality.",
    },
    {
        icon: Shield,
        title: "Quality Assurance",
        description:
            "Rigorous QA processes ensuring consistent, high-quality customer interactions.",
    },
    {
        icon: Clock,
        title: "24/7 Availability",
        description:
            "Round-the-clock support coverage across all time zones and languages.",
    },
    {
        icon: Globe,
        title: "Global Reach",
        description:
            "Multilingual support teams capable of serving global customers.",
    },
    {
        icon: Headphones,
        title: "Expert Agents",
        description:
            "Highly trained professionals dedicated to exceptional customer service.",
    },
];

const benefits = [
    "Reduce operational costs",
    "Improve customer satisfaction scores",
    "Scale support operations rapidly",
    "Access advanced AI and automation tools",
    "Gain actionable insights from customer data",
    "Ensure compliance and data security",
];

export default function CustomerExperiencePage() {
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
                            <Headphones className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                            <span className="text-xs sm:text-sm font-medium">
                                Customer Experience Solutions
                            </span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 px-2 sm:px-0">
                            Elevate Every Customer Interaction
                        </h1>
                        <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 px-4 sm:px-0">
                            Deliver exceptional omnichannel support with our
                            AI-powered customer experience solutions that
                            enhance satisfaction and drive loyalty.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
                            <Link href="/contact" className="w-full sm:w-auto">
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="bg-white text-brand-primary hover:bg-gray-100 w-full sm:w-auto"
                                >
                                    Get Started
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link
                                href="/contact?demo=true"
                                className="w-full sm:w-auto"
                            >
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-white text-white hover:bg-white hover:text-brand-primary w-full sm:w-auto"
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
                            Comprehensive CX Solutions
                        </motion.h2>
                        <motion.p
                            variants={staggerItem}
                            className="text-xl text-gray-600 max-w-3xl mx-auto"
                        >
                            Everything you need to deliver world-class customer
                            experiences at scale.
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
                                Transform Your Customer Experience
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Our proven solutions help enterprise
                                organizations deliver exceptional customer
                                service while reducing costs and improving
                                efficiency.
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
                                    Key Metrics
                                </h3>
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-700 font-medium">
                                                Customer Satisfaction
                                            </span>
                                            <span className="text-brand-primary font-bold">
                                                Target: 95%+
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-brand-primary h-2 rounded-full"
                                                style={{ width: "0%" }}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-700 font-medium">
                                                First Call Resolution
                                            </span>
                                            <span className="text-brand-primary font-bold">
                                                Target: 85%+
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-brand-primary h-2 rounded-full"
                                                style={{ width: "0%" }}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-700 font-medium">
                                                Average Response Time
                                            </span>
                                            <span className="text-brand-primary font-bold">
                                                Target: &lt;60s
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-brand-primary h-2 rounded-full"
                                                style={{ width: "0%" }}
                                            />
                                        </div>
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
                            Ready to Transform Your Customer Experience?
                        </h2>
                        <p className="text-xl mb-10 text-white/90">
                            Let's discuss how our solutions can help you achieve
                            your customer service goals.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
                            <Link href="/contact" className="w-full sm:w-auto">
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="bg-white text-brand-primary hover:bg-gray-100 w-full sm:w-auto"
                                >
                                    Contact Sales
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link
                                href="/contact?demo=true"
                                className="w-full sm:w-auto"
                            >
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-white text-white hover:bg-white hover:text-brand-primary w-full sm:w-auto"
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
