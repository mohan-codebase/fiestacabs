import React from "react";
import Link from "next/link";

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    href,
    onClick,
    variant = "primary",
    size = "md",
    className = "",
    type = "button",
    disabled = false,
}) => {
    // Base styles
    const baseStyles =
        "relative overflow-hidden isolation-isolate inline-block font-semibold rounded-full transition-all duration-300 text-center shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EC2028] disabled:opacity-60 disabled:cursor-not-allowed";

    // Variant styles
    const variantStyles = {
        primary: "bg-[#EC2028] btn-animated text-white hover:bg-red-700 shadow-md",
        secondary: "bg-gray-800 text-white hover:bg-gray-900 shadow-md",
        outline:
            "border-2 border-[#EC2028] text-[#EC2028] hover:bg-[#EC2028] btn-animated hover:text-white",
    };

    // Size styles
    const sizeStyles = {
        sm: "px-4 py-2 text-sm",
        md: "px-8 py-3 text-base",
        lg: "px-10 py-4 text-lg",
    };

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    // If href is provided, render as Link
    if (href) {
        return (
            <Link href={href} className={combinedStyles}>
                <span className="relative z-10 flex items-center justify-center gap-2">
                    {children}
                </span>
            </Link>
        );
    }

    // Otherwise, render as button
    return (
        <button type={type} onClick={onClick} className={combinedStyles} disabled={disabled}>
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    );
};

export default Button;
