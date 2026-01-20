import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, helperText, id, ...props }, ref) => {
        const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        {label}
                        {props.required && (
                            <span className="text-brand-primary ml-1">*</span>
                        )}
                    </label>
                )}
                <input
                    ref={ref}
                    id={inputId}
                    className={cn(
                        "w-full px-4 py-3 border rounded-lg transition-all duration-200",
                        "focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent",
                        "placeholder:text-gray-400",
                        error
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 hover:border-gray-400",
                        props.disabled &&
                            "bg-gray-100 cursor-not-allowed opacity-60",
                        className,
                    )}
                    {...props}
                />
                {error && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        {error}
                    </p>
                )}
                {helperText && !error && (
                    <p className="mt-2 text-sm text-gray-500">{helperText}</p>
                )}
            </div>
        );
    },
);

Input.displayName = "Input";

export default Input;
