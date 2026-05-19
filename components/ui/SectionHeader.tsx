import React from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
  subheading?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  eyebrow,
  heading,
  subheading,
  align = 'center'
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-accent-foreground mb-4 inline-block">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
        {heading}
      </h2>
      {subheading && (
        <p className={`text-lg text-foreground/80 max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {subheading}
        </p>
      )}
    </div>
  );
}
