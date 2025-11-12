import Link from 'next/link';

export function Footer() {
    return (
        <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Documentation */}
                    <div>
                        <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-50 mb-3">
                            Documentation
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/docs"
                                    className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-150"
                                >
                                    Introduction
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/docs/installation"
                                    className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-150"
                                >
                                    Installation
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Components */}
                    <div>
                        <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-50 mb-3">
                            Components
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/docs/components"
                                    className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-150"
                                >
                                    Button
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-50 mb-3">
                            Resources
                        </h3>
                        <ul className="space-y-2">
                            <li>

                                <a href="https://github.com"
                                   target="_blank"
                                   rel="noreferrer"
                                   className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-150"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>

                                <a href="https://twitter.com"
                                   target="_blank"
                                   rel="noreferrer"
                                   className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-150"
                                >
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Community */}
                    <div>
                        <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-50 mb-3">
                            Community
                        </h3>
                        <ul className="space-y-2">
                            <li>

                                <a href="https://discord.com"
                                   target="_blank"
                                   rel="noreferrer"
                                   className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-150"
                                >
                                    Discord
                                </a>
                            </li>
                            <li>

                                <a href="https://github.com/discussions"
                                   target="_blank"
                                   rel="noreferrer"
                                   className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-150"
                                >
                                    Discussions
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div
                    className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        © {new Date().getFullYear()} ComponentDocs. Built with Next.js and Tailwind CSS.
                    </p>

                    <div className="flex items-center space-x-4">

                        <a href="https://github.com"
                           target="_blank"
                           rel="noreferrer"
                           className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-150"
                        >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd"
                                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                      clipRule="evenodd"/>
                            </svg>
                            <span className="sr-only">GitHub</span>
                        </a>

                        <a href="https://twitter.com"
                           target="_blank"
                           rel="noreferrer"
                           className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-150"
                        >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                            <span className="sr-only">Twitter</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}