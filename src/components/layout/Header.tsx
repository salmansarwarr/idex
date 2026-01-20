"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { Menu, X, ChevronDown } from "lucide-react";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
        name: "Services",
        href: "/services",
        submenu: [
            {
                name: "Customer Experience",
                href: "/services/customer-experience",
            },
            { name: "Digital Solutions", href: "/services/digital-solutions" },
            { name: "AI & Analytics", href: "/services/ai-analytics" },
        ],
    },
    { name: "Platform", href: "/platform" },
    { name: "Resources", href: "/resources" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setActiveSubmenu(null);
    }, [pathname]);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
                isScrolled
                    ? "bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-100 py-3"
                    : "bg-white/95 backdrop-blur-sm py-5",
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center space-x-2 group"
                    >
                        <div className="relative w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-primary-dark rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl">
                            <span className="text-white font-bold text-xl">
                                E
                            </span>
                            <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <span className="text-2xl font-bold text-black transition-colors duration-300">
                            Enterprise
                            <span className="text-brand-primary group-hover:text-brand-primary-dark transition-colors duration-300">
                                .
                            </span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
                        {navigation.map((item) => (
                            <div key={item.name} className="relative group">
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative",
                                        isActive(item.href)
                                            ? "text-brand-primary bg-red-50"
                                            : "text-gray-700 hover:text-brand-primary hover:bg-gray-50",
                                    )}
                                    onMouseEnter={() =>
                                        item.submenu &&
                                        setActiveSubmenu(item.name)
                                    }
                                    onMouseLeave={() => setActiveSubmenu(null)}
                                >
                                    {item.name}
                                    {item.submenu && (
                                        <ChevronDown
                                            className={cn(
                                                "w-4 h-4 transition-transform duration-300",
                                                activeSubmenu === item.name &&
                                                    "rotate-180",
                                            )}
                                        />
                                    )}
                                    {/* Active indicator */}
                                    {isActive(item.href) && (
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-brand-primary rounded-full"></span>
                                    )}
                                </Link>

                                {/* Submenu */}
                                {item.submenu &&
                                    activeSubmenu === item.name && (
                                        <div
                                            className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 py-3 overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-top-2"
                                            onMouseEnter={() =>
                                                setActiveSubmenu(item.name)
                                            }
                                            onMouseLeave={() =>
                                                setActiveSubmenu(null)
                                            }
                                        >
                                            {/* Submenu arrow */}
                                            <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-gray-100 transform rotate-45"></div>

                                            {item.submenu.map(
                                                (subitem, idx) => (
                                                    <Link
                                                        key={subitem.name}
                                                        href={subitem.href}
                                                        className={cn(
                                                            "block px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-transparent hover:text-brand-primary transition-all duration-200 border-l-2 border-transparent hover:border-brand-primary",
                                                            isActive(
                                                                subitem.href,
                                                            ) &&
                                                                "bg-red-50 text-brand-primary border-l-2 border-brand-primary",
                                                        )}
                                                        style={{
                                                            animationDelay: `${idx * 50}ms`,
                                                        }}
                                                    >
                                                        <div className="font-semibold">
                                                            {subitem.name}
                                                        </div>
                                                    </Link>
                                                ),
                                            )}
                                        </div>
                                    )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA Buttons - Desktop */}
                    <div className="hidden lg:flex items-center space-x-3">
                        <Link href="/contact">
                            <Button
                                variant="outline"
                                size="sm"
                                className="hover:bg-gray-50 hover:border-brand-primary hover:text-brand-primary transition-all duration-300"
                            >
                                Contact Sales
                            </Button>
                        </Link>
                        <Link href="/contact?demo=true">
                            <Button
                                variant="primary"
                                size="sm"
                                className="bg-gradient-to-r from-brand-primary to-brand-primary-dark hover:from-brand-primary-dark hover:to-brand-primary shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                            >
                                Request Demo
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-gray-700 hover:text-brand-primary hover:bg-gray-100 rounded-lg transition-all duration-300"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={cn(
                        "lg:hidden overflow-hidden transition-all duration-500 ease-in-out",
                        isMobileMenuOpen
                            ? "max-h-[calc(100vh-80px)] opacity-100 mt-6"
                            : "max-h-0 opacity-0",
                    )}
                >
                    <div className="pb-6 overflow-y-auto max-h-[calc(100vh-120px)] custom-scrollbar">
                        <nav className="flex flex-col space-y-2">
                            {navigation.map((item, idx) => (
                                <div
                                    key={item.name}
                                    className="animate-in slide-in-from-left"
                                    style={{
                                        animationDelay: `${idx * 50}ms`,
                                        animationFillMode: "both",
                                    }}
                                >
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-300",
                                            isActive(item.href)
                                                ? "text-brand-primary bg-red-50 shadow-sm"
                                                : "text-gray-700 hover:text-brand-primary hover:bg-gray-50",
                                        )}
                                        onClick={(e) => {
                                            if (item.submenu) {
                                                e.preventDefault();
                                                setActiveSubmenu(
                                                    activeSubmenu === item.name
                                                        ? null
                                                        : item.name,
                                                );
                                            }
                                        }}
                                    >
                                        {item.name}
                                        {item.submenu && (
                                            <ChevronDown
                                                className={cn(
                                                    "w-5 h-5 transition-transform duration-300",
                                                    activeSubmenu ===
                                                        item.name &&
                                                        "rotate-180",
                                                )}
                                            />
                                        )}
                                    </Link>

                                    {/* Mobile Submenu */}
                                    {item.submenu && (
                                        <div
                                            className={cn(
                                                "overflow-hidden transition-all duration-300 ease-in-out",
                                                activeSubmenu === item.name
                                                    ? "max-h-96 opacity-100 mt-2"
                                                    : "max-h-0 opacity-0",
                                            )}
                                        >
                                            <div className="ml-4 space-y-2 pl-4 border-l-2 border-gray-200">
                                                {item.submenu.map((subitem) => (
                                                    <Link
                                                        key={subitem.name}
                                                        href={subitem.href}
                                                        className={cn(
                                                            "block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300",
                                                            isActive(
                                                                subitem.href,
                                                            )
                                                                ? "text-brand-primary bg-red-50"
                                                                : "text-gray-600 hover:text-brand-primary hover:bg-gray-50",
                                                        )}
                                                    >
                                                        {subitem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Mobile CTA Buttons */}
                        <div
                            className="flex flex-col space-y-3 mt-6 animate-in slide-in-from-bottom"
                            style={{ animationDelay: "350ms" }}
                        >
                            <Link href="/contact">
                                <Button
                                    variant="outline"
                                    size="md"
                                    className="w-full hover:bg-gray-50 hover:border-brand-primary hover:text-brand-primary transition-all duration-300"
                                >
                                    Contact Sales
                                </Button>
                            </Link>
                            <Link href="/contact?demo=true">
                                <Button
                                    variant="primary"
                                    size="md"
                                    className="w-full bg-gradient-to-r from-brand-primary to-brand-primary-dark hover:from-brand-primary-dark hover:to-brand-primary shadow-md hover:shadow-xl transition-all duration-300"
                                >
                                    Request Demo
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #8b0000;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #6b0000;
                }
            `}</style>
        </header>
    );
}
