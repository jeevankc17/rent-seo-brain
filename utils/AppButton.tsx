import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "blue" | "white";

export type ButtonSize = "sm" | "md" | "lg" | "xl";

export interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  text?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconSrc?: string;
  iconAlt?: string;
  iconSize?: number;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  loading?: boolean;
  className?: string;
}

const buttonVariants = {
  blue: "bg-[#4F7EFF] text-white shadow-[0_4px_14.7px_0_rgba(79,126,255,0.4)] hover:bg-[#3D6EFF] focus:ring-2 focus:ring-[#4F7EFF] focus:ring-offset-2",
  white: "bg-white text-[#091E42] border border-[#E4E7EA] hover:bg-gray-50 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
};

const buttonSizes = {
  sm: {
    button: "h-[32px] px-3 py-1 text-xs rounded-[16px] gap-1.5 min-w-[80px]",
    icon: "w-3 h-3",
    iconContainer: "w-5 h-5 p-1"
  },
  md: {
    button: "h-[38px] px-4 py-2 text-sm rounded-[19px] gap-2 min-w-[120px]",
    icon: "w-3.5 h-3.5",
    iconContainer: "w-6 h-6 p-1"
  },
  lg: {
    button: "h-[38px] px-1 py-0 text-base rounded-[19px] gap-2.5 min-w-[180px] justify-end",
    icon: "w-4 h-4",
    iconContainer: "w-[30px] h-[30px] p-1.5"
  },
  xl: {
    button: "h-[50px] px-6 py-3 text-lg rounded-[25px] gap-3 min-w-[160px]",
    icon: "w-5 h-5",
    iconContainer: "w-8 h-8 p-1.5"
  }
};

const AppButton: React.FC<AppButtonProps> = ({
  children,
  text,
  variant = "blue",
  size = "md",
  icon,
  iconSrc,
  iconAlt = "",
  iconSize,
  iconPosition = "right",
  fullWidth = false,
  loading = false,
  className = "",
  disabled,
  ...props
}) => {
  const sizeConfig = buttonSizes[size];
  const variantClasses = buttonVariants[variant];
  
  const renderIcon = () => {
    if (loading) {
      return (
        <div className={cn(
          "animate-spin rounded-full border-2 border-current border-t-transparent",
          sizeConfig.icon
        )} />
      );
    }
    
    if (icon) {
      return (
        <div className={cn(
          "flex items-center justify-center rounded-full",
          variant === "blue" ? "bg-white" : "",
          sizeConfig.iconContainer
        )}>
          <div className={sizeConfig.icon}>{icon}</div>
        </div>
      );
    }
    
    if (iconSrc) {
      const iconSizeValue = iconSize || 16;
      return (
        <div className={cn(
          "flex items-center justify-center rounded-full",
          variant === "blue" ? "bg-white" : "",
          sizeConfig.iconContainer
        )}>
          <Image
            src={iconSrc}
            alt={iconAlt}
            width={iconSizeValue}
            height={iconSizeValue}
            className="object-contain"
          />
        </div>
      );
    }
    
    // Default arrow icon if no icon is provided
    if (variant === "blue") {
      return (
        <div className={cn(
          "flex items-center justify-center rounded-full bg-white",
          sizeConfig.iconContainer
        )}>
          <Image
            src="/About/ca/arrow-right.svg"
            alt="Arrow right"
            width={16}
            height={16}
            className="object-contain"
          />
        </div>
      );
    } else {
      // White variant - no background, neutral-900 arrow
      return (
        <svg 
          className={cn(sizeConfig.icon, "text-neutral-900")} 
          fill="none" 
          viewBox="0 0 21 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M4.66406 10H16.3307" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M10.5 4.16669L16.3333 10L10.5 15.8334" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      );
    }
  };

  const content = children || text;
  const iconElement = renderIcon();

  return (
    <button
      className={cn(
        // Base styles
        "inline-flex items-center font-urbanist font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
        // Size styles
        sizeConfig.button,
        // Variant styles
        variantClasses,
        // Width styles
        fullWidth ? "w-full max-w-full" : "w-auto",
        // Text overflow handling
        "overflow-hidden",
        // Custom className
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {iconPosition === "left" && iconElement}
      {content && (
        <span className={cn(
          "flex-1 min-w-0 leading-tight px-3",
          fullWidth ? "text-center truncate" : "truncate",
          // Responsive text sizing is handled by buttonSizes
        )}>
          {content}
        </span>
      )}
      {iconPosition === "right" && iconElement}
    </button>
  );
};

export default AppButton;