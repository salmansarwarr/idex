"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { fadeIn, slideUp } from "@/lib/animations";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

interface ContactFormData {
    name: string;
    email: string;
    company: string;
    phone: string;
    message: string;
}

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>();

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        console.log("Form data:", data);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        reset();

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-brand-primary to-brand-primary-dark text-white py-16 sm:py-20">
                <div className="container mx-auto px-4 sm:px-6">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 px-2 sm:px-0">
                            Let's Start a Conversation
                        </h1>
                        <p className="text-lg sm:text-xl text-white/90 px-4 sm:px-0">
                            Get in touch with our team to discuss how we can
                            help transform your business with enterprise-grade
                            solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form & Info Section */}
            <section className="section-padding">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={slideUp}
                            className="lg:col-span-2"
                        >
                            <Card padding="lg">
                                <h2 className="text-3xl font-bold text-black mb-6">
                                    Send Us a Message
                                </h2>

                                {submitSuccess && (
                                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                        <p className="text-green-800 font-medium">
                                            Thank you for contacting us! We'll
                                            get back to you within 24 hours.
                                        </p>
                                    </div>
                                )}

                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="space-y-6"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <Input
                                            label="Full Name"
                                            placeholder="John Doe"
                                            error={errors.name?.message}
                                            {...register("name", {
                                                required: "Name is required",
                                            })}
                                            required
                                        />

                                        <Input
                                            label="Email Address"
                                            type="email"
                                            placeholder="john@company.com"
                                            error={errors.email?.message}
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message:
                                                        "Invalid email address",
                                                },
                                            })}
                                            required
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <Input
                                            label="Company Name"
                                            placeholder="Acme Corporation"
                                            error={errors.company?.message}
                                            {...register("company", {
                                                required:
                                                    "Company name is required",
                                            })}
                                            required
                                        />

                                        <Input
                                            label="Phone Number"
                                            type="tel"
                                            placeholder="+1 (234) 567-890"
                                            error={errors.phone?.message}
                                            {...register("phone")}
                                        />
                                    </div>

                                    <Textarea
                                        label="Message"
                                        placeholder="Tell us about your project or inquiry..."
                                        rows={6}
                                        error={errors.message?.message}
                                        {...register("message", {
                                            required: "Message is required",
                                            minLength: {
                                                value: 10,
                                                message:
                                                    "Message must be at least 10 characters",
                                            },
                                        })}
                                        required
                                    />

                                    <Button
                                        type="submit"
                                        variant="primary"
                                        size="lg"
                                        isLoading={isSubmitting}
                                        className="w-full sm:w-auto"
                                    >
                                        {isSubmitting
                                            ? "Sending..."
                                            : "Send Message"}
                                    </Button>
                                </form>
                            </Card>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={slideUp}
                            transition={{ delay: 0.2 }}
                            className="space-y-6"
                        >
                            {/* Contact Details */}
                            <Card padding="lg">
                                <h3 className="text-2xl font-bold text-black mb-6">
                                    Contact Information
                                </h3>

                                <div className="space-y-4 sm:space-y-6">
                                    <div className="flex items-start space-x-3 sm:space-x-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-black mb-1 text-sm sm:text-base">
                                                Email
                                            </p>
                                            <a
                                                href="mailto:info@enterprise.com"
                                                className="text-sm sm:text-base text-gray-600 hover:text-brand-primary transition-colors break-all"
                                            >
                                                info@enterprise.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-6 h-6 text-brand-primary" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-black mb-1">
                                                Phone
                                            </p>
                                            <a
                                                href="tel:+1234567890"
                                                className="text-gray-600 hover:text-brand-primary transition-colors"
                                            >
                                                +1 (234) 567-890
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-brand-primary" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-black mb-1">
                                                Headquarters
                                            </p>
                                            <p className="text-gray-600">
                                                123 Business Avenue
                                                <br />
                                                New York, NY 10001
                                                <br />
                                                United States
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-6 h-6 text-brand-primary" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-black mb-1">
                                                Business Hours
                                            </p>
                                            <p className="text-gray-600">
                                                Monday - Friday: 9:00 AM - 6:00
                                                PM EST
                                                <br />
                                                24/7 Support Available
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            {/* Office Locations */}
                            <Card padding="lg">
                                <h3 className="text-2xl font-bold text-black mb-4">
                                    Global Offices
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="font-semibold text-black">
                                            North America
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            New York, San Francisco, Toronto
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-black">
                                            Europe
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            London, Berlin, Paris
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-black">
                                            Asia Pacific
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Singapore, Tokyo, Sydney
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
