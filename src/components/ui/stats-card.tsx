import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: LucideIcon;
  trend?: {
    value: number;
    label: string;
    direction: 'up' | 'down' | 'neutral';
  };
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
  className?: string;
}

export default function StatsCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  variant = 'default',
  className
}: StatsCardProps) {
  const variantClasses = {
    default: {
      card: 'bg-white border-slate-200/60',
      icon: 'bg-slate-100 text-slate-600',
      value: 'text-slate-900',
      trend: {
        up: 'text-green-600 bg-green-50',
        down: 'text-red-600 bg-red-50',
        neutral: 'text-slate-600 bg-slate-50'
      }
    },
    success: {
      card: 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200/60',
      icon: 'bg-green-100 text-green-600',
      value: 'text-green-900',
      trend: {
        up: 'text-green-700 bg-green-100',
        down: 'text-green-500 bg-green-50',
        neutral: 'text-green-600 bg-green-50'
      }
    },
    warning: {
      card: 'bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200/60',
      icon: 'bg-orange-100 text-orange-600',
      value: 'text-orange-900',
      trend: {
        up: 'text-orange-700 bg-orange-100',
        down: 'text-orange-500 bg-orange-50',
        neutral: 'text-orange-600 bg-orange-50'
      }
    },
    danger: {
      card: 'bg-gradient-to-br from-red-50 to-pink-50 border-red-200/60',
      icon: 'bg-red-100 text-red-600',
      value: 'text-red-900',
      trend: {
        up: 'text-red-700 bg-red-100',
        down: 'text-red-500 bg-red-50',
        neutral: 'text-red-600 bg-red-50'
      }
    },
    info: {
      card: 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200/60',
      icon: 'bg-blue-100 text-blue-600',
      value: 'text-blue-900',
      trend: {
        up: 'text-blue-700 bg-blue-100',
        down: 'text-blue-500 bg-blue-50',
        neutral: 'text-blue-600 bg-blue-50'
      }
    }
  };

  const currentVariant = variantClasses[variant];

  return (
    <Card className={cn(
      'transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 border shadow-sm',
      currentVariant.card,
      className
    )}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-600 tracking-wide uppercase">
              {title}
            </p>
            <div className="space-y-1">
              <p className={cn(
                'text-3xl font-bold tracking-tight',
                currentVariant.value
              )}>
                {value}
              </p>
              {description && (
                <p className="text-sm text-slate-500">
                  {description}
                </p>
              )}
            </div>
            {trend && (
              <div className={cn(
                'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium',
                currentVariant.trend[trend.direction]
              )}>
                <span className="mr-1">
                  {trend.direction === 'up' ? '↗' : trend.direction === 'down' ? '↘' : '→'}
                </span>
                {trend.value}% {trend.label}
              </div>
            )}
          </div>
          {Icon && (
            <div className={cn(
              'w-12 h-12 rounded-xl flex items-center justify-center',
              currentVariant.icon
            )}>
              <Icon className="w-6 h-6" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}