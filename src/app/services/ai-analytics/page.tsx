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
    Brain,
    TrendingUp,
    BarChart3,
    Cpu,
    Target,
    Sparkles,
    CheckCircle,
    ArrowRight,
} from "lucide-react";

const features = [
    {
        icon: Brain,
        title: "Machine Learning Models",
        description:
            "Custom ML models trained on your data to solve specific business challenges.",
    },
    {
        icon: TrendingUp,
        title: "Predictive Analytics",
        description:
            "Forecast trends and outcomes with advanced statistical modeling and AI.",
    },
    {
        icon: BarChart3,
        title: "Business Intelligence",
        description:
            "Transform raw data into actionable insights with comprehensive dashboards.",
    },
    {
        icon: Cpu,
        title: "Process Automation",
        description:
            "Intelligent automation powered by AI to streamline repetitive tasks.",
    },
    {
        icon: Target,
        title: "Customer Analytics",
        description:
            "Deep insights into customer behavior, preferences, and lifetime value.",
    },
    {
        icon: Sparkles,
        title: "Natural Language Processing",
        description:
            "Extract meaning from text data with advanced NLP and sentiment analysis.",
    },
];

const useCases = [
    {
        title: "Demand Forecasting",
        description:
            "Predict future demand with high accuracy to optimize inventory.",
        impact: "Significant cost optimization",
    },
    {
        title: "Churn Prediction",
        description: "Identify at-risk customers before they leave.",
        impact: "Improved customer loyalty",
    },
    {
        title: "Fraud Detection",
        description:
            "Real-time fraud detection with machine learning algorithms.",
        impact: "High detection accuracy",
    },
    {
        title: "Personalization Engine",
        description: "Deliver personalized experiences at scale.",
        impact: "Increased user engagement",
    },
];

const benefits = [
    "Make data-driven decisions with confidence",
    "Automate complex processes and workflows",
    "Uncover hidden patterns and insights",
    "Improve operational efficiency",
    "Reduce costs through intelligent optimization",
    "Scale AI capabilities across your organization",
];

export default function AIAnalyticsPage() {
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
                            <Brain className="w-5 h-5 mr-2" />
                            <span className="text-sm font-medium">
                                AI & Analytics Solutions
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Harness the Power of Intelligent Automation
                        </h1>
                        <p className="text-xl text-white/90 mb-8">
                            Data-driven insights and AI automation to optimize
                            business performance, reduce costs, and unlock new
                            opportunities.
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
                            AI-Powered Solutions
                        </motion.h2>
                        <motion.p
                            variants={staggerItem}
                            className="text-xl text-gray-600 max-w-3xl mx-auto"
                        >
                            Leverage cutting-edge artificial intelligence and
                            advanced analytics to transform your business
                            operations.
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

            {/* Use Cases Section */}
            <section className="section-padding bg-gray-50">
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
                            Real-World Use Cases
                        </motion.h2>
                        <motion.p
                            variants={staggerItem}
                            className="text-xl text-gray-600 max-w-3xl mx-auto"
                        >
                            See how our AI and analytics solutions deliver
                            measurable business impact.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                    >
                        {useCases.map((useCase, index) => (
                            <motion.div key={index} variants={staggerItem}>
                                <Card padding="lg" className="h-full">
                                    <h3 className="text-2xl font-bold text-black mb-3">
                                        {useCase.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {useCase.description}
                                    </p>
                                    <div className="inline-flex items-center px-4 py-2 bg-brand-primary/10 rounded-lg">
                                        <TrendingUp className="w-4 h-4 text-brand-primary mr-2" />
                                        <span className="text-sm font-semibold text-brand-primary">
                                            {useCase.impact}
                                        </span>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section-padding">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideUp}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                                Transform Data Into Competitive Advantage
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Our AI and analytics solutions help you make
                                smarter decisions, automate processes, and drive
                                measurable business outcomes.
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
                            <Card
                                padding="lg"
                                className="bg-gradient-to-br from-gray-50 to-white"
                            >
                                <h3 className="text-2xl font-bold text-black mb-6">
                                    Our AI Approach
                                </h3>
                                <div className="space-y-6">
                                    {[
                                        {
                                            step: "1",
                                            title: "Data Assessment",
                                            desc: "Evaluate your data landscape and identify opportunities",
                                        },
                                        {
                                            step: "2",
                                            title: "Model Development",
                                            desc: "Build and train custom AI models for your use case",
                                        },
                                        {
                                            step: "3",
                                            title: "Integration",
                                            desc: "Seamlessly integrate AI into your existing systems",
                                        },
                                        {
                                            step: "4",
                                            title: "Optimization",
                                            desc: "Continuously improve model performance and accuracy",
                                        },
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start space-x-4"
                                        >
                                            <div className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                                {item.step}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-black mb-1">
                                                    {item.title}
                                                </h4>
                                                <p className="text-sm text-gray-600">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
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
                            Ready to Unlock the Power of AI?
                        </h2>
                        <p className="text-xl mb-10 text-white/90">
                            Let's explore how AI and analytics can transform
                            your business and drive measurable results.
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
