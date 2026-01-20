import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "hover" | "bordered";
    padding?: "none" | "sm" | "md" | "lg";
    children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    (
        { className, variant = "default", padding = "md", children, ...props },
        ref,
    ) => {
        const baseStyles = "rounded-xl transition-all duration-300";

        const variants = {
            default: "bg-white shadow-md",
            hover: "bg-white shadow-md hover:shadow-xl hover:-translate-y-1 cursor-pointer",
            bordered:
                "bg-white border-2 border-gray-200 hover:border-brand-primary",
        };

        const paddings = {
            none: "",
            sm: "p-4",
            md: "p-6",
            lg: "p-8",
        };

        return (
            <div
                ref={ref}
                className={cn(
                    baseStyles,
                    variants[variant],
                    paddings[padding],
                    className,
                )}
                {...props}
            >
                {children}
            </div>
        );
    },
);

Card.displayName = "Card";

export default Card;
