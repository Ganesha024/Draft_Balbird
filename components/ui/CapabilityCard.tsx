import React from 'react';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface CapabilityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accent?: string;
  className?: string;
  href?: string;
  specs?: string;
}

export default function CapabilityCard({ 
  icon: Icon, 
  title, 
  description, 
  accent = 'border-accent',
  className = '',
  href,
  specs
}: CapabilityCardProps) {
  const Content = (
    <div className={`
      bg-card border border-border p-6 rounded-lg 
      border-l-4 ${accent}
      transition-all duration-300 ease-in-out
      hover:-translate-y-1 hover:shadow-lg
      @media (prefers-reduced-motion: no-preference) { transition-all }
      h-full flex flex-col
      ${className}
    `}>
      <Icon className="w-8 h-8 text-foreground mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-foreground/80 flex-grow">{description}</p>
      
      {specs && (
        <p className="mt-4 text-xs text-foreground/60 font-mono tracking-tight">
          {specs}
        </p>
      )}

      {href && (
        <div className="mt-6 flex items-center text-sm font-bold text-accent-foreground group-hover:underline">
          Learn More <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="group block h-full">
        {Content}
      </Link>
    );
  }

  return Content;
}
