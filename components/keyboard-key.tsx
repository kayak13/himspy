import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface KeyboardKeyProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export function KeyboardKey({ 
  children, 
  onClick, 
  className, 
  size = "md", 
  variant = "primary",
  disabled = false 
}: KeyboardKeyProps) {
  const sizeClasses = {
    sm: "w-12 h-12 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    xl: "px-8 py-4 text-xl"
  };

  const variantClasses = {
    primary: "keyboard-key",
    secondary: "bg-white border-2 border-pink-200 text-pink-600 hover:bg-pink-50"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "rounded-xl font-bold transition-all duration-200 flex items-center justify-center",
        sizeClasses[size],
        variantClasses[variant],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
}
