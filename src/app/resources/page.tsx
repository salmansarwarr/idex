"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { FileText } from "lucide-react";

export default function ResourcesPage() {
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
                            Resources & Insights
                        </h1>
                        <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 px-4 sm:px-0">
                            Expert insights, industry trends, and best practices
                            to help you stay ahead in the digital age.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Empty State */}
            <section className="section-padding bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center py-16 bg-white rounded-xl border-2 border-dashed border-gray-200">
                        <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500 text-xl font-medium mb-2">
                            No articles published yet.
                        </p>
                        <p className="text-gray-400">
                            We're just getting started — check back soon for
                            insights and updates.
                        </p>
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
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
                            Stay Updated
                        </h2>
                        <p className="text-xl mb-10 text-white/90">
                            Subscribe to our newsletter for the latest insights,
                            trends, and best practices delivered to your inbox.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
                            />
                            <button
                                type="submit"
                                className="px-8 py-4 bg-white text-brand-primary rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                            >
                                Subscribe
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
