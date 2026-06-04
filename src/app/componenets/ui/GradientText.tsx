// components/ui/GradientText.tsx

'use client';

import React from 'react';
import { cn } from '../lib/utils/cn';

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  colors?: [string, string];
  animate?: boolean;
}

export const GradientText = React.forwardRef<HTMLSpanElement, GradientTextProps>(
  (
    {
      children,
      colors = ['#1447E6', '#64B5F6'],
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
        className={cn('bg-clip-text text-transparent', className)}
        style={gradientStyle}
        {...props}
      >
        {children}
      </span>
    );
  }
);

GradientText.displayName = 'GradientText';
