'use client';

import React from 'react';
import { cn } from '../lib/utils/cn';

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  colors?: [string, string];
  direction?: 'to-right' | 'to-bottom' | 'to-br';
  animate?: boolean;
}

export const GradientText = React.forwardRef<HTMLSpanElement, GradientTextProps>(
  (
    {
      children,
      colors = ['#1447E6', '#64B5F6'],
      direction = 'to-right',
      animate = false,
      className,
      ...props
    },
    ref
  ) => {
    const gradientStyle = {
      backgroundImage: `linear-gradient(to right, ${colors[0]}, ${colors[1]})`,
    };

    return (
      <span
        ref={ref}
        className={cn(
          'bg-clip-text text-transparent',
          animate && 'animate-pulse',
          className
        )}
        style={gradientStyle}
        {...props}
      >
        {children}
      </span>
    );
  }
);

GradientText.displayName = 'GradientText';
