import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const footerLinks = {
    company: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
        { name: "Blog", href: "/resources" },
    ],
    services: [
        { name: "Customer Experience", href: "/services/customer-experience" },
        { name: "Digital Solutions", href: "/services/digital-solutions" },
        { name: "AI & Analytics", href: "/services/ai-analytics" },
        { name: "Platform", href: "/platform" },
    ],
    resources: [
        { name: "Case Studies", href: "/resources?category=case-studies" },
        { name: "Whitepapers", href: "/resources?category=whitepapers" },
        { name: "Webinars", href: "/resources?category=webinars" },
        { name: "Documentation", href: "/resources?category=docs" },
    ],
    legal: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "Security", href: "/security" },
    ],
};

const socialLinks = [
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Facebook", href: "#", icon: Facebook },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <Link
                            href="/"
                            className="flex items-center space-x-2 mb-6"
                        >
                            <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">
                                    E
                                </span>
                            </div>
                            <span className="text-2xl font-bold">
                                Enterprise
                                <span className="text-brand-primary">.</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 mb-6 max-w-md">
                            Empowering global enterprises with cutting-edge
                            technology solutions and exceptional customer
                            experience services.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-gray-400">
                                <Mail className="w-5 h-5 text-brand-primary" />
                                <a
                                    href="mailto:info@enterprise.com"
                                    className="hover:text-white transition-colors"
                                >
                                    info@enterprise.com
                                </a>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-400">
                                <Phone className="w-5 h-5 text-brand-primary" />
                                <a
                                    href="tel:+1234567890"
                                    className="hover:text-white transition-colors"
                                >
                                    +1 (234) 567-890
                                </a>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-brand-primary" />
                                <span>Global Headquarters, New York, USA</span>
                            </div>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Resources
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="mt-12 pt-12 border-t border-gray-800">
                    <div className="max-w-md mx-auto lg:mx-0">
                        <h3 className="text-lg font-semibold mb-4">
                            Subscribe to Our Newsletter
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Get the latest insights and updates delivered to
                            your inbox.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent text-white placeholder:text-gray-500"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-primary-dark transition-colors font-medium whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Copyright */}
                        <p className="text-gray-400 text-sm">
                            © {currentYear} Enterprise. All rights reserved.
                        </p>

                        {/* Legal Links */}
                        <div className="flex flex-wrap justify-center gap-6">
                            {footerLinks.legal.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-400 hover:text-white text-sm transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center space-x-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-primary transition-colors"
                                        aria-label={social.name}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
