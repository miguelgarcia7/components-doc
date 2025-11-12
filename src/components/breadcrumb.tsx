'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Breadcrumb() {
    const pathname = usePathname();

    // Split the pathname and filter out empty strings
    const segments = pathname.split('/').filter(Boolean);

    // Don't show breadcrumbs on homepage
    if (segments.length === 0) {
        return null;
    }

    // Build breadcrumb items
    const breadcrumbs = segments.map((segment, index) => {
        const href = '/' + segments.slice(0, index + 1).join('/');
        const label = segment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        return { href, label };
    });

    return (
        <nav className="flex items-center space-x-1 text-sm text-zinc-600 dark:text-zinc-400 mb-6">
            <Link
                href="/"
                className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-150"
            >
                Home
            </Link>

            {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;

                return (
                    <div key={crumb.href} className="flex items-center space-x-1">
                        <svg className="h-4 w-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>

                        {isLast ? (
                            <span className="font-medium text-zinc-900 dark:text-zinc-50">
                                {crumb.label}
                            </span>
                        ) : (
                            <Link
                                href={crumb.href}
                                className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-150"
                            >
                                {crumb.label}
                            </Link>
                        )}
                    </div>
                );
            })}
        </nav>
    );
}