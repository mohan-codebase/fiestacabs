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
}

const Button: React.FC<ButtonProps> = ({
    children,
    href,
    onClick,
    variant = "primary",
    size = "md",
    className = "",
    type = "button",
}) => {
    // Base styles
    const baseStyles =
        "inline-block font-semibold rounded-md transition-all duration-300 text-center";

    // Variant styles
    const variantStyles = {
        primary: "bg-[#D32F2F] text-white hover:bg-[#B71C1C]",
        secondary: "bg-gray-800 text-white hover:bg-gray-900",
        outline:
            "border-2 border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white",
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
                {children}
            </Link>
        );
    }

    // Otherwise, render as button
    return (
        <button type={type} onClick={onClick} className={combinedStyles}>
            {children}
        </button>
    );
};

export default Button;
