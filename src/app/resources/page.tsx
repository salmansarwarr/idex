"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import { fadeIn, staggerContainer, staggerItem } from "@/lib/animations";
import { Search, Calendar, User, ArrowRight, FileText } from "lucide-react";

// Sample blog posts data
const blogPosts = [
    {
        id: 1,
        title: "The Future of Customer Experience: AI and Automation",
        excerpt:
            "Explore how artificial intelligence is transforming customer service and creating more personalized experiences at scale.",
        category: "AI & Technology",
        author: "Sarah Johnson",
        date: "January 15, 2026",
        readTime: "5 min read",
        image: "/blog/ai-cx.jpg",
    },
    {
        id: 2,
        title: "5 Strategies to Reduce Customer Churn",
        excerpt:
            "Learn proven tactics to improve customer retention and build lasting relationships with your clients.",
        category: "Customer Success",
        author: "Michael Chen",
        date: "January 10, 2026",
        readTime: "7 min read",
        image: "/blog/churn.jpg",
    },
    {
        id: 3,
        title: "Cloud Migration Best Practices for Enterprises",
        excerpt:
            "A comprehensive guide to successfully migrating your enterprise infrastructure to the cloud.",
        category: "Technology",
        author: "Emily Rodriguez",
        date: "January 5, 2026",
        readTime: "10 min read",
        image: "/blog/cloud.jpg",
    },
    {
        id: 4,
        title: "Building a Data-Driven Organization",
        excerpt:
            "How to leverage analytics and business intelligence to make better decisions and drive growth.",
        category: "Analytics",
        author: "David Park",
        date: "December 28, 2025",
        readTime: "6 min read",
        image: "/blog/data.jpg",
    },
    {
        id: 5,
        title: "Cybersecurity Trends for 2026",
        excerpt:
            "Stay ahead of emerging threats with these critical security trends every enterprise should know.",
        category: "Security",
        author: "Lisa Anderson",
        date: "December 20, 2025",
        readTime: "8 min read",
        image: "/blog/security.jpg",
    },
    {
        id: 6,
        title: "Scaling Customer Support Operations",
        excerpt:
            "Practical strategies for scaling your support team while maintaining quality and customer satisfaction.",
        category: "Customer Experience",
        author: "James Wilson",
        date: "December 15, 2025",
        readTime: "6 min read",
        image: "/blog/support.jpg",
    },
];

const categories = [
    "All",
    "AI & Technology",
    "Customer Success",
    "Analytics",
    "Security",
    "Customer Experience",
];

export default function ResourcesPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = blogPosts.filter((post) => {
        const matchesCategory =
            selectedCategory === "All" || post.category === selectedCategory;
        const matchesSearch =
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

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

            {/* Search and Filter */}
            <section className="section-padding bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        {/* Search Bar */}
                        <div className="mb-8">
                            <div className="relative max-w-2xl mx-auto">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 px-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() =>
                                        setSelectedCategory(category)
                                    }
                                    className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all text-sm sm:text-base ${
                                        selectedCategory === category
                                            ? "bg-brand-primary text-white"
                                            : "bg-white text-gray-700 hover:bg-gray-100"
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Blog Posts Grid */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {filteredPosts.map((post) => (
                                <motion.div
                                    key={post.id}
                                    variants={staggerItem}
                                >
                                    <Link href={`/resources/${post.id}`}>
                                        <Card
                                            variant="hover"
                                            padding="none"
                                            className="h-full"
                                        >
                                            {/* Image Placeholder */}
                                            <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                                <FileText className="w-16 h-16 text-gray-400" />
                                            </div>

                                            <div className="p-6">
                                                {/* Category Badge */}
                                                <div className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-xs font-semibold mb-3">
                                                    {post.category}
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-xl font-bold text-black mb-3 hover:text-brand-primary transition-colors">
                                                    {post.title}
                                                </h3>

                                                {/* Excerpt */}
                                                <p className="text-gray-600 mb-4 line-clamp-3">
                                                    {post.excerpt}
                                                </p>

                                                {/* Meta Info */}
                                                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-200">
                                                    <div className="flex items-center space-x-4">
                                                        <div className="flex items-center">
                                                            <User className="w-4 h-4 mr-1" />
                                                            {post.author}
                                                        </div>
                                                        <div className="flex items-center">
                                                            <Calendar className="w-4 h-4 mr-1" />
                                                            {post.date}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Read More */}
                                                <div className="flex items-center text-brand-primary font-semibold mt-4 group">
                                                    Read More
                                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </Card>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* No Results */}
                        {filteredPosts.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-gray-600 text-lg">
                                    No articles found. Try adjusting your search
                                    or filter.
                                </p>
                            </div>
                        )}
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
