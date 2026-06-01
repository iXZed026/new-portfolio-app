// components/ui/Button.tsx

'use client';

import React from 'react';
import { cn } from '../lib/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      'font-semibold rounded-lg transition-all duration-300',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'focus-visible:ring-offset-black focus-visible:ring-blue-500',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'active:scale-95',
      'transform'
    );

    const variantStyles: Record<string, string> = {
      primary: cn(
        'bg-blue-600 text-white',
        'hover:bg-blue-700 hover:shadow-lg',
        `hover:shadow-[0_0_30px_rgba(20,71,230,0.4)]`,
        'border border-blue-500'
      ),
      secondary: cn(
        'bg-transparent text-white',
        'border border-blue-600 hover:border-blue-500',
        'hover:bg-blue-600 hover:bg-opacity-10',
        'hover:shadow-lg'
      ),
      ghost: cn(
        'bg-transparent text-white',
        'hover:bg-white hover:bg-opacity-10',
        'border border-transparent hover:border-white hover:border-opacity-20'
      ),
    };

    const sizeStyles: Record<string, string> = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-5 py-3 text-base',
      lg: 'px-7 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            Loading...
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';