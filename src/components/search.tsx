'use client';

import { useState, useEffect, useRef } from 'react';

interface SearchResult {
    title: string;
    href: string;
    description: string;
}

const searchData: SearchResult[] = [
    {
        title: 'Introduction',
        href: '/docs',
        description: 'Welcome to the component documentation',
    },
    {
        title: 'Installation',
        href: '/docs/installation',
        description: 'Get started by installing the necessary dependencies',
    },
    {
        title: 'Button',
        href: '/docs/components',
        description: 'A button component with multiple variants',
    },
];

export function Search() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    // Handle keyboard shortcut (Cmd+K or Ctrl+K)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setOpen(true);
            }
            if (e.key === 'Escape') {
                setOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Focus input when modal opens
    useEffect(() => {
        if (open && inputRef.current) {
            inputRef.current.focus();
        }
    }, [open]);

    // Filter results based on query
    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
            return;
        }

        const filtered = searchData.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
    }, [query]);

    if (!open) {
        return (
            <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200 hover:border-zinc-300 dark:hover:border-zinc-700"
            >
                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search...
                <kbd className="ml-auto hidden sm:inline-block pointer-events-none h-5 select-none items-center gap-1 rounded border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 px-1.5 font-mono text-xs font-medium opacity-100">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </button>
        );
    }

    return (
        <>
        {/* Backdrop with fade-in */}
        <div
            className="fixed inset-0 bg-black/50 z-50 animate-[fade-in_0.2s_ease-out]"
            onClick={() => setOpen(false)}
        />

        {/* Search Modal with slide-in */}
        <div className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4 animate-[slide-in-from-bottom_0.3s_ease-out]">
            <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-2xl">
                {/* Search Input */}
                <div className="flex items-center border-b border-zinc-200 dark:border-zinc-800 px-4">
                    <svg className="h-5 w-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search documentation..."
                        className="flex-1 bg-transparent border-0 py-4 px-4 text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 focus:outline-none"
                    />
                    <button
                        onClick={() => setOpen(false)}
                        className="text-sm text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors duration-150"
                    >
                        ESC
                    </button>
                </div>

                {/* Search Results */}
                <div className="max-h-[400px] overflow-y-auto p-2">
                    {results.length === 0 && query && (
                        <div className="py-8 text-center text-sm text-zinc-400">
                            No results found for "{query}"
                        </div>
                    )}
                    {results.length === 0 && !query && (
                        <div className="py-8 text-center text-sm text-zinc-400">
                            Type to search documentation...
                        </div>
                    )}
                    {results.map((result, index) => (

                        <a key={result.href}
                        href={result.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-md px-4 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-150 animate-[slide-in-from-left_0.3s_ease-out]"
                        style={{ animationDelay: `${index * 50}ms` }}
                        >
                        <div className="font-medium text-zinc-900 dark:text-zinc-50">
                    {result.title}
                        </div>
                        <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                    {result.description}
                </div>
            </a>
            ))}
        </div>
        </div>
</div>
</>
);
}