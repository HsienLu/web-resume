import React from 'react';

interface SectionProps {
    title: string;
    className?: string;
    children: React.ReactNode;
}

export function Section({ title, className, children }: SectionProps) {
    return (
        <section className={`mb-12 ${className || ''}`}>
            <div className="flex items-center mb-6">
                <div className="w-1 h-6 bg-slate-800 mr-3 rounded-full"></div>
                <h2 className="text-lg font-bold tracking-wide uppercase text-slate-800 dark:text-slate-100">
                    {title}
                </h2>
            </div>
            {children}
        </section>
    );
}
