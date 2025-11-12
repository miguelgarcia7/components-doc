import Link from 'next/link';
import { Search } from './search';
import { ThemeToggle } from './theme-toggle';
import { MobileNav } from './mobile-nav';

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 backdrop-blur">
            <div className="flex h-14 items-center px-4 sm:px-6 md:px-8">
                <MobileNav />

                <div className="mr-2 sm:mr-4 flex items-center">
                    <Link href="/" className="mr-3 sm:mr-6 flex items-center space-x-2">
                        <span className="font-bold text-lg sm:text-xl text-zinc-900 dark:text-zinc-50">ComponentDocs</span>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 text-sm font-medium">
                        <Link
                            href="/docs"
                            className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50 text-zinc-600 dark:text-zinc-400"
                        >
                            Documentation
                        </Link>
                        <Link
                            href="/docs/components"
                            className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50 text-zinc-600 dark:text-zinc-400"
                        >
                            Components
                        </Link>
                    </nav>
                </div>

                <div className="flex flex-1 items-center justify-end space-x-2 sm:space-x-4">
                    <div className="hidden sm:block">
                        <Search />
                    </div>
                    <nav className="flex items-center space-x-1 sm:space-x-2">
                        <ThemeToggle />

                        <a href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 h-9 w-9"
                        >
                        <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        <span className="sr-only">GitHub</span>
                    </a>
                </nav>
            </div>
        </div>
</header>
);
}