import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface SectionCardProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  headerContent?: React.ReactNode;
  variant?: 'default' | 'outlined' | 'elevated' | 'gradient';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export default function SectionCard({
  title,
  description,
  children,
  className,
  headerContent,
  variant = 'default',
  padding = 'md'
}: SectionCardProps) {
  const variantClasses = {
    default: 'bg-white border border-slate-200/60 shadow-sm',
    outlined: 'bg-white border-2 border-slate-200 shadow-none',
    elevated: 'bg-white border border-slate-200/60 shadow-lg shadow-slate-900/5',
    gradient: 'bg-gradient-to-br from-white to-slate-50/50 border border-slate-200/60 shadow-md'
  };

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <Card className={cn(
      'transition-all duration-200 hover:shadow-md',
      variantClasses[variant],
      className
    )}>
      {(title || description || headerContent) && (
        <CardHeader className={cn(
          'flex flex-row items-center justify-between space-y-0',
          padding !== 'none' && 'pb-4'
        )}>
          <div className="space-y-1">
            {title && (
              <CardTitle className="text-xl font-semibold text-slate-900 tracking-tight">
                {title}
              </CardTitle>
            )}
            {description && (
              <CardDescription className="text-slate-600 text-sm leading-relaxed">
                {description}
              </CardDescription>
            )}
          </div>
          {headerContent && (
            <div className="flex items-center space-x-2">
              {headerContent}
            </div>
          )}
        </CardHeader>
      )}
      <CardContent className={cn(
        padding === 'none' && 'p-0',
        (title || description || headerContent) && padding !== 'none' && 'pt-0'
      )}>
        {children}
      </CardContent>
    </Card>
  );
}