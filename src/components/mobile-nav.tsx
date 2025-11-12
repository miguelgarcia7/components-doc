'use client';

import { useState } from 'react';
import Link from 'next/link';

export function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Mobile menu button */}
            <button
                onClick={() => setOpen(!open)}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 h-9 w-9 md:hidden"
            >
                <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    {open ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                </svg>
                <span className="sr-only">Toggle menu</span>
            </button>

            {/* Mobile menu overlay */}
            {open && (
                <>
                    <div
                        className="fixed inset-0 z-50 bg-black/50 md:hidden"
                        onClick={() => setOpen(false)}
                    />
                    <div className="fixed left-0 top-14 bottom-0 z-50 w-72 bg-white dark:bg-zinc-950 border-r border-zinc-200 dark:border-zinc-800 overflow-y-auto md:hidden">
                        <div className="p-6">
                            <h2 className="font-semibold text-sm text-zinc-900 dark:text-zinc-50 mb-4">
                                Getting Started
                            </h2>
                            <nav className="space-y-1">
                                <Link
                                    href="/docs"
                                    onClick={() => setOpen(false)}
                                    className="block px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
                                >
                                    Introduction
                                </Link>
                                <Link
                                    href="/docs/installation"
                                    onClick={() => setOpen(false)}
                                    className="block px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
                                >
                                    Installation
                                </Link>
                            </nav>

                            <h2 className="font-semibold text-sm text-zinc-900 dark:text-zinc-50 mb-4 mt-6">
                                Components
                            </h2>
                            <nav className="space-y-1">
                                <Link
                                    href="/docs/components"
                                    onClick={() => setOpen(false)}
                                    className="block px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800"
                                >
                                    Button
                                </Link>
                            </nav>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}